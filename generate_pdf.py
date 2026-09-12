import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # Running Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 11 * inch - 36, "European Winter Journey 2026–2027 | Jean Aristide Belleza Aquino & Avery Sinclair Belleza")
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.5)
            self.line(54, 11 * inch - 42, 8.5 * inch - 54, 11 * inch - 42)
            
        # Running Footer
        footer_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(8.5 * inch - 54, 30, footer_text)
        self.drawString(54, 30, "Confirmed Travel Plan & Holiday Master Itinerary · Approved Schengen Visa")
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(54, 40, 8.5 * inch - 54, 40)
        self.restoreState()

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=50,
        rightMargin=50,
        topMargin=50,
        bottomMargin=50
    )

    styles = getSampleStyleSheet()
    
    # Palette
    primary_color = colors.HexColor("#1e3a8a")  # Deep Navy
    accent_color = colors.HexColor("#0284c7")   # Blue
    highlight_bg = colors.HexColor("#f0fdf4")   # Soft green tint
    highlight_border = colors.HexColor("#16a34a")
    text_dark = colors.HexColor("#0f172a")
    text_muted = colors.HexColor("#475569")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=primary_color,
        spaceAfter=3
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=text_muted,
        spaceAfter=10
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=5
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark
    )

    body_bold = ParagraphStyle(
        'BodyDarkBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12,
        textColor=text_dark
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=colors.white,
        alignment=0
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.5,
        leading=10.5,
        textColor=text_dark
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=7.5,
        leading=10.5,
        textColor=text_dark
    )

    story = []

    # ==================== PAGE 1: TRIP OVERVIEW & TRAVEL LOGISTICS ====================
    story.append(Paragraph("EUROPEAN WINTER EXPEDITION 2026–2027", title_style))
    story.append(Paragraph("Master Travel Overview & Itinerary · Netherlands · Germany · Switzerland · France · United Kingdom", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceBefore=0, spaceAfter=8))

    # Profile & Status Banner
    profile_data = [
        [
            Paragraph("<b>Travelers:</b><br/>• Jean Aristide Belleza Aquino (PH Citizen, French Schengen Visa)<br/>• Avery Sinclair Belleza (Australian Citizen, Visa-Free)", body_style),
            Paragraph("<b>Schengen Visa Status:</b> <font color='#16a34a'><b>APPROVED</b></font><br/><b>Schengen Window:</b> 16 Dec 2026 – 04 Jan 2027 (18 Nights)<br/><b>UK Holiday Base:</b> Southampton, United Kingdom", body_style)
        ]
    ]
    t_prof = Table(profile_data, colWidths=[3.7*inch, 3.8*inch])
    t_prof.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#f8fafc")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#e2e8f0")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 6),
        ('BOTTOMPADDING', (0,0), (-1,-1), 6),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
        ('RIGHTPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_prof)
    story.append(Spacer(1, 10))

    # Country & Regional Nights Breakdown
    story.append(Paragraph("1. Regional Overview & Nights Allocation", h1_style))
    country_data = [
        [Paragraph("Country / Region", table_header),
         Paragraph("Cities & Highlights Visited", table_header),
         Paragraph("Nights", table_header),
         Paragraph("Accommodations & Bases", table_header)]
    ]
    c_rows = [
        ("France (Main Hub)", "Strasbourg, Colmar, Paris, Palace of Versailles", "7 Nights\n(5 Paris + 2 Alsace)", "Break & Home Paris Italie Porte de Choisy (Paris)\nB&B Hotel Kehl (Alsace Base)"),
        ("Switzerland", "Interlaken, Grindelwald First, Lauterbrunnen, Lake Brienz, Sigriswil, Zurich", "4 Nights", "Swiss Alps Base (Interlaken)"),
        ("Netherlands", "Amsterdam Canal Ring, Zaanse Schans Windmills, Rijksmuseum, The Hague & Temple", "2 Nights", "Amsterdam Hostel Leidseplein (Leidseplein, Amsterdam)"),
        ("Germany", "Frankfurt am Main (Base), Cologne & Düsseldorf Christmas Markets", "3 Nights", "Hotel Cristall (Ottostrasse 3, Frankfurt am Main)"),
        ("Overnight Sleeper", "FlixBus Inter-City Sleeper Routes", "4 Nights", "London➔AMS, AMS➔FRA, ZRH➔Paris, Paris➔LON (2 Schengen Internal)")
    ]
    for c, r, n, p in c_rows:
        country_data.append([
            Paragraph(f"<b>{c}</b>", table_cell_bold),
            Paragraph(r, table_cell),
            Paragraph(n, table_cell_bold if "Nights" in n else table_cell),
            Paragraph(p, table_cell)
        ])
    country_data.append([
        Paragraph("<b>TOTAL CONTINUOUS SCHENGEN STAY</b>", table_cell_bold),
        Paragraph("<b>Single Continuous Entry (16 Dec 2026 – 03 Jan 2027)</b>", table_cell_bold),
        Paragraph("<b>18 Nights</b>", table_cell_bold),
        Paragraph("<b>Exits 03 Jan night to London Victoria</b>", table_cell_bold)
    ])
    t_country = Table(country_data, colWidths=[1.4*inch, 2.7*inch, 1.1*inch, 2.3*inch])
    t_country.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor("#f1f5f9")),
    ]))
    story.append(t_country)
    story.append(Spacer(1, 10))

    # Confirmed Flights
    story.append(Paragraph("2. Confirmed International Flights (China Southern Airlines)", h1_style))
    story.append(Paragraph("<b>Booking Reference:</b> Go260821306082600034 | <b>Ticket No.:</b> 7842208774170 (Confirmed & Fully Paid)", body_style))
    story.append(Spacer(1, 4))
    flight_data = [
        [Paragraph("Date & Segment", table_header),
         Paragraph("Flight No. (Aircraft)", table_header),
         Paragraph("Departure", table_header),
         Paragraph("Arrival", table_header),
         Paragraph("Status", table_header)]
    ]
    f_rows = [
        ("12 Dec 2026<br/>Manila ➔ Guangzhou", "CZ5052 (B738)", "MNL Terminal 3<br/>03:20", "CAN Terminal 2<br/>05:50", "Confirmed (Econ)"),
        ("12 Dec 2026<br/>Guangzhou ➔ London", "CZ303 (B789)", "CAN Terminal 2<br/>13:40", "LHR Terminal 4<br/>18:35", "Confirmed (Econ)"),
        ("08 Jan 2027<br/>London ➔ Guangzhou", "CZ690 (B789)", "LGW South<br/>09:50", "CAN Terminal 2<br/>05:35 (+1d)", "Confirmed (Econ)"),
        ("09 Jan 2027<br/>Guangzhou ➔ Manila", "CZ5051 (B738)", "CAN Terminal 2<br/>09:40", "MNL Terminal 3<br/>12:20", "Confirmed (Econ)")
    ]
    for r, f, d, a, s in f_rows:
        flight_data.append([
            Paragraph(r, table_cell_bold),
            Paragraph(f, table_cell),
            Paragraph(d, table_cell),
            Paragraph(a, table_cell),
            Paragraph(s, table_cell_bold)
        ])
    t_flight = Table(flight_data, colWidths=[1.6*inch, 1.4*inch, 1.5*inch, 1.5*inch, 1.5*inch])
    t_flight.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
    ]))
    story.append(t_flight)
    story.append(Spacer(1, 10))

    story.append(PageBreak())

    # ==================== PAGES 2-3: COMPREHENSIVE DAY-TO-DAY ITINERARY ====================
    story.append(Paragraph("DETAILED DAY-TO-DAY TRIP ITINERARY", title_style))
    story.append(Paragraph("Comprehensive Day-by-Day Route, Highlights, Transit & Accommodations (15 Dec 2026 – 04 Jan 2027)", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceBefore=0, spaceAfter=8))

    itinerary_data = [
        [Paragraph("Day / Date", table_header),
         Paragraph("City & Region", table_header),
         Paragraph("Daily Activities & Key Highlights", table_header),
         Paragraph("Accommodation & Transit", table_header)]
    ]

    days = [
        ("Day 1<br/>15 Dec 2026", "London ➔<br/>Amsterdam Central", "<b>Evening (19:00 – 21:30):</b><br/>&nbsp;&nbsp;• London Victoria Coach Station (Check-in)<br/><b>Night (22:00 – 10:25+1d):</b><br/>&nbsp;&nbsp;• FlixBus N824 (Departs 22:00 · Ref: 338 890 0447 · Seats 11C/11D)<br/>&nbsp;&nbsp;• Dover Port Eurotunnel crossing<br/>&nbsp;&nbsp;• Arrive Amsterdam Central Station (10:25 AM)", "Transit: FlixBus N824<br/>(Seats 11C & 11D Paid)"),
        ("Day 2<br/>16 Dec 2026", "Amsterdam<br/>(Netherlands)", "<b>Morning (10:25 – 12:00):</b><br/>&nbsp;&nbsp;• Arrive Amsterdam Central (10:25 AM)<br/>&nbsp;&nbsp;• GVB Tram Line 2/12 to Leidseplein (Hostel drop)<br/><b>Afternoon (12:30 – 16:30):</b><br/>&nbsp;&nbsp;• UNESCO Canal Ring & Dam Square<br/>&nbsp;&nbsp;• Begijnhof Courtyard<br/><b>Evening (17:00 – 20:30):</b><br/>&nbsp;&nbsp;• Amsterdam Light Festival & Leidseplein", "Amsterdam Hostel Leidseplein<br/>(Night 1 of 2)"),
        ("Day 3<br/>17 Dec 2026", "Amsterdam &<br/>Zaanse Schans (NL)", "<b>Morning (09:00 – 12:30):</b><br/>&nbsp;&nbsp;• NS Train to Zaanse Schans (17 min)<br/>&nbsp;&nbsp;• Zaanse Schans Windmills & Cheese Farm<br/><b>Afternoon (13:30 – 17:00):</b><br/>&nbsp;&nbsp;• Rijksmuseum (Museumplein)<br/>&nbsp;&nbsp;• Ice Village Christmas Market<br/><b>Evening (17:30 – 20:30):</b><br/>&nbsp;&nbsp;• UNESCO Canal Boat Cruise (75 min)<br/>&nbsp;&nbsp;• The Jordaan canal walk", "Amsterdam Hostel Leidseplein<br/>(Night 2 of 2)"),
        ("Day 4<br/>18 Dec 2026", "The Hague (NL) &<br/>Amsterdam", "<b>Morning (08:00 – 12:30):</b><br/>&nbsp;&nbsp;• NS Intercity to Den Haag / Zoetermeer (48 min)<br/>&nbsp;&nbsp;• The Hague Netherlands Temple (09:30 AM Session)<br/><b>Afternoon (13:00 – 16:30):</b><br/>&nbsp;&nbsp;• Peace Palace & ICC exterior<br/><b>Evening (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• Return train to Amsterdam Base", "Amsterdam Base<br/>(Night 3 of 3)"),
        ("Day 5<br/>19 Dec 2026", "Amsterdam ➔<br/>Cologne (DE)", "<b>Morning (08:30 – 11:45):</b><br/>&nbsp;&nbsp;• DB ICE: Amsterdam ➔ Köln Hbf (08:38–11:15, 2h 38m)<br/>&nbsp;&nbsp;• Hotel check-in / luggage drop<br/><b>Afternoon (12:30 – 16:30):</b><br/>&nbsp;&nbsp;• Cologne Cathedral (Kölner Dom)<br/>&nbsp;&nbsp;• Hohenzollern Bridge & Lindt Museum<br/><b>Evening (17:00 – 21:00):</b><br/>&nbsp;&nbsp;• Cologne Cathedral Christmas Market<br/>&nbsp;&nbsp;• Alter Markt & Heinzels Wintermärchen", "Cologne Base<br/>(Night 1 of 2)"),
        ("Day 6<br/>20 Dec 2026", "Cologne &<br/>Düsseldorf (DE)", "<b>Morning (09:30 – 12:30):</b><br/>&nbsp;&nbsp;• Sunday Church Worship (Cologne)<br/>&nbsp;&nbsp;• Rhine River Promenade<br/><b>Afternoon (13:00 – 17:30):</b><br/>&nbsp;&nbsp;• Regional Train to Düsseldorf (20 min)<br/>&nbsp;&nbsp;• Düsseldorf 7 Themed Christmas Markets<br/><b>Evening (17:30 – 20:30):</b><br/>&nbsp;&nbsp;• Königsallee & Little Tokyo<br/>&nbsp;&nbsp;• Train return to Cologne base", "Cologne Base<br/>(Night 2 of 2)"),
        ("Day 7<br/>21 Dec 2026", "Cologne ➔<br/>Frankfurt am Main", "<b>Morning (09:00 – 10:30):</b><br/>&nbsp;&nbsp;• DB ICE: Köln ➔ Frankfurt Hbf (1h 05m)<br/>&nbsp;&nbsp;• Hotel Cristall check-in<br/><b>Afternoon (12:00 – 16:30):</b><br/>&nbsp;&nbsp;• Eiserner Steg & Frankfurt Altstadt<br/>&nbsp;&nbsp;• Kaiserdom Cathedral<br/><b>Evening (16:30 – 21:00):</b><br/>&nbsp;&nbsp;• Römerberg & Paulsplatz Christmas Markets", "Hotel Cristall<br/>(Night 1 of 2, Frankfurt)"),
        ("Day 8<br/>22 Dec 2026", "Frankfurt am Main<br/>(Germany)", "<b>Morning & Midday (09:30 – 15:30):</b><br/>&nbsp;&nbsp;• Goethe House & Museumsufer<br/>&nbsp;&nbsp;• Zeil shopping street<br/><b>Evening (16:45 – 22:00):</b><br/>&nbsp;&nbsp;• S-Bahn S5 to Friedrichsdorf (26 min)<br/>&nbsp;&nbsp;• Frankfurt Germany Temple (06:00 PM Session)<br/>&nbsp;&nbsp;• Return S-Bahn to Frankfurt Hbf", "Hotel Cristall<br/>(Night 2 of 2, Frankfurt)"),
        ("Day 9<br/>23 Dec 2026", "Frankfurt ➔<br/>Strasbourg (FR)", "<b>Early Morning (04:35 – 08:35):</b><br/>&nbsp;&nbsp;• FlixBus N13: Frankfurt ➔ Strasbourg (Ref: 339 153 0857)<br/>&nbsp;&nbsp;• Tram Line D to Kehl base<br/><b>Daytime & Evening (09:30 – 20:30):</b><br/>&nbsp;&nbsp;• Place Kléber (30m Great Tree)<br/>&nbsp;&nbsp;• Christkindelsmärik (Place Broglie)<br/>&nbsp;&nbsp;• Petite France & Strasbourg Cathedral", "B&B Hotel Kehl<br/>(Base for Alsace · Night 1 of 2)"),
        ("Day 10<br/>24 Dec 2026", "Colmar & Alsace<br/>(France)", "<b>Morning (09:30 – 12:30):</b><br/>&nbsp;&nbsp;• SNCF TER: Strasbourg ➔ Colmar (30 min)<br/>&nbsp;&nbsp;• Petite Venise & Quai de la Poissonnerie<br/><b>Afternoon (13:00 – 16:30):</b><br/>&nbsp;&nbsp;• Maison Pfister & Colmar Christmas Markets<br/><b>Evening (17:00 – 20:30):</b><br/>&nbsp;&nbsp;• Train return to Strasbourg<br/>&nbsp;&nbsp;• Christmas Eve dinner", "B&B Hotel Kehl<br/>(Base for Alsace · Night 2 of 2)"),
        ("Day 11<br/>25 Dec 2026", "Strasbourg ➔<br/>Bern Base (CH)", "<b>Morning (08:30 – 12:00):</b><br/>&nbsp;&nbsp;• Transit Strasbourg to Bern Hbf<br/>&nbsp;&nbsp;• Alpenblick CoLiving check-in<br/><b>Afternoon & Evening (13:00 – 21:00):</b><br/>&nbsp;&nbsp;• Bern UNESCO Old Town & 6 km Lauben arcades<br/>&nbsp;&nbsp;• Zytglogge & Christmas fondue dinner", "Alpenblick CoLiving, Bern<br/>(Night 1 of 4 · Confirmed)"),
        ("Day 12<br/>26 Dec 2026", "Lauterbrunnen &<br/>Mürren (CH)", "<b>Morning (09:00 – 12:30):</b><br/>&nbsp;&nbsp;• Train: Bern ➔ Lauterbrunnen (1h 15m)<br/>&nbsp;&nbsp;• Lauterbrunnen Valley & Staubbach Falls<br/><b>Afternoon (13:00 – 16:30):</b><br/>&nbsp;&nbsp;• BLM Cable Car & Rail to Mürren (1,650m)<br/>&nbsp;&nbsp;• Mürren alpine viewpoints<br/><b>Evening (17:00 – 20:00):</b><br/>&nbsp;&nbsp;• Return train to Bern Base", "Alpenblick CoLiving, Bern<br/>(Night 2 of 4 · Confirmed)"),
        ("Day 13<br/>27 Dec 2026", "Lake Brienz, Sigriswil<br/>& Blausee (CH)", "<b>Morning (09:30 – 12:30):</b><br/>&nbsp;&nbsp;• PostBus 103 to Iseltwald (Lake Brienz CLOY Pier)<br/><b>Midday (13:15 – 15:30):</b><br/>&nbsp;&nbsp;• STI Bus 21/25 to Sigriswil Suspension Bridge<br/><b>Evening (16:15 – 19:15):</b><br/>&nbsp;&nbsp;• SBB Train + Bus 230 to Blausee Nature Park<br/>&nbsp;&nbsp;• Path of the 1,000 Lights lantern walk", "Alpenblick CoLiving, Bern<br/>(Night 3 of 4 · Confirmed)"),
        ("Day 14<br/>28 Dec 2026", "Grindelwald &<br/>Lake Thun (CH)", "<b>Morning (08:30 – 12:30):</b><br/>&nbsp;&nbsp;• Bern ➔ Grindelwald First Gondola (2,168m)<br/>&nbsp;&nbsp;• First Cliff Walk by Tissot<br/><b>Afternoon (13:30 – 17:00):</b><br/>&nbsp;&nbsp;• Train to Spiez & Lake Thun waterfront stroll<br/><b>Evening (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• Return train to Bern base<br/>&nbsp;&nbsp;• Rosengarten sunset panorama over Aare river", "Alpenblick CoLiving, Bern<br/>(Night 4 of 4 · Confirmed)"),
        ("Day 15<br/>29 Dec 2026", "Bern ➔ Paris<br/>(CH ➔ France)", "<b>Morning (08:30 – 12:30):</b><br/>&nbsp;&nbsp;• Bern Switzerland Temple (Morning Session)<br/>&nbsp;&nbsp;• Sacred worship & temple grounds reflection<br/><b>Afternoon (13:30 – 19:45):</b><br/>&nbsp;&nbsp;• High-Speed TGV Lyria: Bern ➔ Paris (4h 15m)<br/><b>Evening (20:00 – 22:00):</b><br/>&nbsp;&nbsp;• Arrive Paris Gare de Lyon · Metro 14 to hotel<br/>&nbsp;&nbsp;• Check in to Break & Home Paris Italie", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris · Night 1)"),
        ("Day 16<br/>30 Dec 2026", "Paris<br/>(France - Main)", "<b>Morning (09:00 – 13:00):</b><br/>&nbsp;&nbsp;• Musée du Louvre (Mona Lisa & masterpieces)<br/><b>Afternoon (13:30 – 16:30):</b><br/>&nbsp;&nbsp;• Tuileries Garden & Place de la Concorde<br/>&nbsp;&nbsp;• Galeries Lafayette Haussmann dome<br/><b>Evening (17:00 – 21:00):</b><br/>&nbsp;&nbsp;• Champs-Élysées & Arc de Triomphe rooftop", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 17<br/>31 Dec 2026", "Paris (NYE)<br/>(France - Main)", "<b>Morning (09:30 – 13:00):</b><br/>&nbsp;&nbsp;• Musée d'Orsay (Impressionist art)<br/><b>Afternoon (14:00 – 17:00):</b><br/>&nbsp;&nbsp;• Notre-Dame Cathedral exterior & Île de la Cité<br/><b>Evening & Midnight (20:00 – 01:00):</b><br/>&nbsp;&nbsp;• Trocadéro (Eiffel Tower sparkle)<br/>&nbsp;&nbsp;• NYE Countdown on Champs-Élysées (Free Metro)", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 18<br/>01 Jan 2027", "Paris<br/>(France - Main)", "<b>Morning (10:30 – 13:00):</b><br/>&nbsp;&nbsp;• Jardin du Luxembourg & Medici Fountain<br/><b>Afternoon (13:30 – 16:30):</b><br/>&nbsp;&nbsp;• Le Marais & Place des Vosges<br/><b>Evening (17:30 – 20:30):</b><br/>&nbsp;&nbsp;• Latin Quarter & Saint-Germain-des-Prés", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 19<br/>02 Jan 2027", "Versailles<br/>(France - Main)", "<b>Morning (09:00 – 13:30):</b><br/>&nbsp;&nbsp;• RER C: Paris ➔ Versailles (40 min)<br/>&nbsp;&nbsp;• Palace of Versailles (Hall of Mirrors)<br/><b>Afternoon (14:00 – 16:30):</b><br/>&nbsp;&nbsp;• Phébus Bus 2 to Le Chesnay<br/>&nbsp;&nbsp;• Paris France LDS Temple grounds<br/><b>Evening (17:30 – 21:00):</b><br/>&nbsp;&nbsp;• RER C return to Paris", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 20<br/>03 Jan 2027", "Paris ➔ London<br/>(Exit Schengen)", "<b>Daytime (10:00 – 18:00):</b><br/>&nbsp;&nbsp;• Pont Alexandre III & Seine stroll<br/>&nbsp;&nbsp;• Hotel pack bags & check-out<br/><b>Night (21:30 – 23:00):</b><br/>&nbsp;&nbsp;• Transfer to Paris Bercy Seine<br/>&nbsp;&nbsp;• FlixBus 1700 (Departs 23:00 · Ref: 338 920 9866)<br/>&nbsp;&nbsp;• Eurotunnel crossing into UK", "Transit: FlixBus Route 1700<br/>(AUD $169.98 Paid)"),
        ("Day 21<br/>04 Jan 2027", "London<br/>(United Kingdom)", "<b>Morning (07:25 – 10:30):</b><br/>&nbsp;&nbsp;• Arrive London Victoria (07:25 AM)<br/>&nbsp;&nbsp;• Breakfast at Victoria<br/><b>Afternoon (11:30 – 14:30):</b><br/>&nbsp;&nbsp;• South Western Railway to Southampton (1h 15m)<br/>&nbsp;&nbsp;• Return to Southampton family base", "UK Residence<br/>(Southampton, UK)"),
    ]

    for d, loc, act, acc in days:
        is_fr = "France" in loc or "Paris" in loc
        itinerary_data.append([
            Paragraph(f"<b>{d}</b>", table_cell_bold),
            Paragraph(f"<b>{loc}</b>", table_cell_bold if is_fr else table_cell),
            Paragraph(act, table_cell),
            Paragraph(acc, table_cell)
        ])

    t_itin = Table(itinerary_data, colWidths=[1.1*inch, 1.4*inch, 2.9*inch, 2.1*inch])
    t_itin.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ]))
    story.append(t_itin)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    output_path = "/Users/jeana/Projects/schengen-trip-2026/Schengen_Trip_Overview_Itinerary_Jean_Aquino.pdf"
    build_pdf(output_path)
    # Also update public version for web download
    build_pdf("/Users/jeana/Projects/schengen-trip-2026/public/Schengen_Trip_Overview_Itinerary_Jean_Aquino.pdf")
