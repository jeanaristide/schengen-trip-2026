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
        ("Germany", "Frankfurt am Main (Base), Cologne (Cathedral & Lindt Excursion)", "3 Nights", "Hotel Cristall (Ottostrasse 3, Frankfurt am Main)"),
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
        ("Day 1<br/>15 Dec 2026", "London ➔<br/>Amsterdam", "Departure: Board FlixBus N824 at London Victoria Coach Station at 10:00 pm. Overnight travel across the English Channel to the Netherlands.", "Transit: FlixBus N824<br/>(Overnight Sleeper Coach)"),
        ("Day 2<br/>16 Dec 2026", "Amsterdam<br/>(Netherlands)", "Arrival: Arrive Amsterdam at 10:00 am from London. Hotel luggage drop. Evening walking tour of the Amsterdam Light Festival along the UNESCO canal ring.", "Amsterdam Hostel Leidseplein<br/>(Night 1 of 2)"),
        ("Day 3<br/>17 Dec 2026", "Amsterdam &<br/>Zaanse Schans (NL)", "Windmills & Art: Morning direct train to Zaanse Schans for historic working windmills and artisanal cheese farm. Afternoon Rijksmuseum masterpieces, Ice Village Christmas Market, and evening UNESCO canal cruise.", "Amsterdam Hostel Leidseplein<br/>(Night 2 of 2)"),
        ("Day 4<br/>18 Dec 2026", "The Hague (NL) ➔<br/>Overnight Coach", "Justice & Temple: 48-min NS train to Den Haag. Photos at International Criminal Court (ICC) & Peace Palace. Afternoon sacred Temple Endowment Session at The Hague Netherlands Temple in Zoetermeer. 12:45 am sleeper bus to Frankfurt.", "Transit: FlixBus Overnight<br/>(Departs 12:45 am, 19 Dec)"),
        ("Day 5<br/>19 Dec 2026", "Frankfurt am Main<br/>(Germany)", "Temple & Römerberg: Arrive ~07:15 am. Attend scheduled sacred 8:15 am Temple Endowment Session at Frankfurt Germany Temple (Friedrichsdorf). Afternoon Eiserner Steg. Evening Römerberg Christmas Market.", "Hotel Cristall<br/>(Night 1 of 3, Frankfurt)"),
        ("Day 6<br/>20 Dec 2026", "Frankfurt am Main<br/>(Germany)", "Sunday Worship & Culture: Morning Sunday worship / spiritual reflection. Stroll along River Main. Afternoon Goethe House and Museumsufer art walk. Evening Alt-Sachsenhausen.", "Hotel Cristall<br/>(Night 2 of 3, Frankfurt)"),
        ("Day 7<br/>21 Dec 2026", "Frankfurt & Cologne<br/>(Germany)", "Cathedral Excursion: 1-hour fast ICE train to Cologne. Visit Cologne Cathedral (Kölner Dom) and Lindt Chocolate Museum. Evening ICE return to Frankfurt.", "Hotel Cristall<br/>(Night 3 of 3, Frankfurt)"),
        ("Day 8<br/>22 Dec 2026", "Kehl & Strasbourg<br/>(Germany / France)", "Capital of Christmas: Morning direct ICE/TGV train south to Kehl. Check into B&B Hotel. Cross-border tram D into Strasbourg, France. Tour Place Kléber Great Tree.", "B&B Hotel Kehl<br/>(15 Allensteiner Str., Kehl)"),
        ("Day 9<br/>23 Dec 2026", "Colmar & Alsace<br/>(France)", "Fairytale Alsace: 30-minute TER regional train excursion to fairytale Colmar. Explore illuminated half-timbered houses and bridges of Petite Venise.", "B&B Hotel Kehl<br/>(15 Allensteiner Str., Kehl)"),
        ("Day 10<br/>24 Dec 2026", "Interlaken<br/>(Switzerland)", "Swiss Alpine Gateway: Scenic train south via Basel and Bern to Interlaken. Höhematte park views of Jungfrau. Christmas Eve fondue dinner in the Alps.", "Swiss Alps Base<br/>(Central Interlaken)"),
        ("Day 11<br/>25 Dec 2026", "Grindelwald First<br/>(Switzerland)", "Alpine Cliff Walk: Cableway to Grindelwald First (CLOY reunion scene). Thrilling First Cliff Walk and winter walking trail with dramatic mountain views.", "Swiss Alps Base<br/>(Central Interlaken)"),
        ("Day 12<br/>26 Dec 2026", "Lauterbrunnen &<br/>Mürren (CH)", "Valley of 72 Waterfalls: Scenic train to Lauterbrunnen (Staubbach Falls). Cable car & mountain railway up to car-free alpine village of Mürren.", "Swiss Alps Base<br/>(Central Interlaken)"),
        ("Day 13<br/>27 Dec 2026", "Lake Brienz<br/>(Switzerland)", "The Piano Scene: Visit lakeside piano landing stage in Iseltwald on Lake Brienz ('Crash Landing on You' scene) and majestic Giessbach Falls.", "Swiss Alps Base<br/>(Central Interlaken)"),
        ("Day 14<br/>28 Dec 2026", "Sigriswil & Zurich<br/>➔ Paris (CH / FR)", "Suspension Bridge & Departure: Panoramic suspension bridge at Sigriswil. Train to Zurich for evening lakeside stroll. 09:00 pm overnight sleeper bus to Paris.", "Transit: FlixBus Overnight<br/>(Zurich to Paris Bercy)"),
        ("Day 15<br/>29 Dec 2026", "Paris<br/>(France - Main)", "Arrival: Arrive Paris Bercy 06:40 am. Drop bags at hotel. Ascend to Sacré-Cœur in Montmartre, explore Place du Tertre, and evening Seine stroll.", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 16<br/>30 Dec 2026", "Paris<br/>(France - Main)", "Art & Windows: Morning cultural tour of the Louvre Museum (Mona Lisa). Afternoon at Galeries Lafayette to view holiday window displays & dome.", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 17<br/>31 Dec 2026", "Paris (NYE)<br/>(France - Main)", "New Year's Eve: Visit Eiffel Tower & Trocadéro. Celebrate the grand midnight countdown to 2027 on the illuminated Champs-Élysées.", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 18<br/>01 Jan 2027", "Paris<br/>(France - Main)", "New Year's Day: Relaxed morning stroll through Luxembourg Gardens & Latin Quarter. Evening illuminated Seine River Dinner Cruise.", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 19<br/>02 Jan 2027", "Versailles<br/>(France - Main)", "Royal Palace: Full-day excursion via RER Line C to the royal Palace of Versailles. Tour the magnificent Hall of Mirrors and Royal Grounds.", "Break & Home Paris Italie<br/>(Porte de Choisy, Paris)"),
        ("Day 20<br/>03 Jan 2027", "Paris ➔ London<br/>(Exit Schengen)", "Departure: Check out of hotel. Final day in Le Marais for souvenirs. Board 11:00 pm overnight FlixBus at Paris Bercy to return to London.", "Transit: FlixBus Overnight<br/>(Paris to London Victoria)"),
        ("Day 21<br/>04 Jan 2027", "London<br/>(United Kingdom)", "Arrival: Arrive back at London Victoria Coach Station at 07:25 am. Return to Southampton for remaining holiday.", "UK Residence<br/>(Southampton, UK)")
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
