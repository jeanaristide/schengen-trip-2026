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
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 11 * inch - 36, "Schengen Visa Itinerary & Cover Dossier | Jean Aristide Belleza Aquino")
            self.setStrokeColor(colors.HexColor("#e2e8f0"))
            self.setLineWidth(0.5)
            self.line(54, 11 * inch - 42, 8.5 * inch - 54, 11 * inch - 42)
            
        # Footer
        footer_text = f"Page {self._pageNumber} of {page_count}"
        self.drawRightString(8.5 * inch - 54, 30, footer_text)
        self.drawString(54, 30, "CONFIDENTIAL – Prepared for French Embassy / TLScontact Manila")
        self.setStrokeColor(colors.HexColor("#e2e8f0"))
        self.setLineWidth(0.5)
        self.line(54, 40, 8.5 * inch - 54, 40)
        self.restoreState()

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    primary_color = colors.HexColor("#1e3a8a")  # Deep Navy
    accent_color = colors.HexColor("#0284c7")   # Blue
    text_dark = colors.HexColor("#0f172a")
    text_muted = colors.HexColor("#475569")
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=primary_color,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=text_muted,
        spaceAfter=12
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=primary_color,
        spaceBefore=12,
        spaceAfter=6
    )

    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Heading3'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=accent_color,
        spaceBefore=8,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=text_dark
    )

    body_bold = ParagraphStyle(
        'BodyDarkBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=text_dark
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white,
        alignment=1 # Center
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=text_dark
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=11,
        textColor=text_dark
    )

    story = []

    # ==================== PAGE 1: COVER LETTER ====================
    story.append(Paragraph("EMBASSY OF FRANCE IN THE PHILIPPINES", title_style))
    story.append(Paragraph("Consular Section / TLScontact Visa Application Centre, Manila", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceBefore=2, spaceAfter=10))

    meta_text = """
    <b>Date:</b> 26 August 2026<br/>
    <b>Subject:</b> Application for Multiple-Entry Schengen Short-Stay Tourist Visa (Type C)<br/>
    <b>Applicant:</b> Jean Aristide Belleza Aquino | Philippine Passport: P8863141A (Valid until 23 Sept 2028)<br/>
    <b>Continuous Schengen Journey:</b> 15 December 2026 – 04 January 2027 (Main Destination: France)
    """
    story.append(Paragraph(meta_text, body_style))
    story.append(Spacer(1, 10))

    story.append(Paragraph("Dear Visa Officer,", body_bold))
    story.append(Spacer(1, 6))

    letter_body_1 = """
    I am formally submitting my application for a Multiple-Entry Schengen Short-Stay Tourist Visa (Type C) for an upcoming European winter holiday spanning 15 December 2026 to 04 January 2027. Following the passing of our parents in 2009 and 2019, our maternal aunt, Maria Leonora Belleza Mancebo (British Citizen), has stood as our primary parental figure. She is currently undergoing medical care for Stage 4 metastatic breast cancer at the Southampton Oncology Centre, University Hospital Southampton. A central purpose of our trip is to visit, assist, and spend the holiday season with her at her residence in Southampton. I will be accompanied throughout by my sister, Avery Sinclair Belleza (Australian Citizen). When her health allows, our aunt also intends to join portions of our European itinerary. Because our journey enters and returns via the UK, a multiple-entry visa is respectfully requested.
    """
    story.append(Paragraph(letter_body_1, body_style))
    story.append(Spacer(1, 8))

    story.append(Paragraph("1. Primary Destination Justification (Article 5(1)(b) Schengen Visa Code)", h2_style))
    letter_body_2 = """
    Pursuant to Article 5(1)(b) of the Schengen Visa Code, <b>France represents our principal destination</b>. Across our continuous 18-night Schengen stay, our longest overnight stay is in <b>Paris, France (5 nights: 29 Dec 2026 – 03 Jan 2027)</b> at <i>Break & Home Paris Italie Porte de Choisy</i> (reserved under my name). Additionally, we spend 2 nights in Kehl directly dedicated to exploring the Alsace region of France (Strasbourg Christmas Capital and Colmar), bringing our total France engagement to 7 nights.
    """
    story.append(Paragraph(letter_body_2, body_style))
    story.append(Spacer(1, 8))

    story.append(Paragraph("2. Applicant Profile & Strong Ties to the Philippines", h2_style))
    letter_body_3 = """
    I am employed as a full-time <b>Data Scientist at ADVINTEL, INC. (ADVANCE.AI)</b> in Makati City, earning a gross monthly salary of <b>PHP 200,000</b>. My employer has fully approved my official leave of absence from 12 December 2026 to 10 January 2027, with my position awaiting my immediate return. I hold an MBA in Data Science and actively administer family real estate assets in Cavite. My international travel history demonstrates complete and verified compliance across Taiwan, USA, United Kingdom, Australia, New Zealand, and Canada.
    """
    story.append(Paragraph(letter_body_3, body_style))
    story.append(Spacer(1, 8))

    story.append(Paragraph("3. Financial Solvency & Trip Funding", h2_style))
    letter_body_4 = """
    My total personal liquid assets exceed <b>€17,594 (approx. PHP 1,120,000+)</b> maintained across HSBC AU (€13,634.23), BPI BanKo (€3,817.65), BDO, Maya, and MariBank, supplemented by long-term investment policies. My individual share of trip expenses is conservatively estimated at <b>AUD 3,347.07 (~€2,050)</b>. My sister Avery has independently funded our shared accommodation bookings (transferring 4,500 AUD to our dedicated joint logistics account), and all remaining flights, inter-city sleeper FlixBus journeys, and activities are fully confirmed or budgeted.
    """
    story.append(Paragraph(letter_body_4, body_style))
    story.append(Spacer(1, 12))

    story.append(Paragraph("Respectfully yours,", body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("<b>Jean Aristide Belleza Aquino</b><br/>Data Scientist, ADVINTEL, INC. | +63 945 409 9751 | jeanaristideaquino@gmail.com", body_style))

    story.append(PageBreak())

    # ==================== PAGE 2: SUMMARY TABLES ====================
    story.append(Paragraph("TRIP OVERVIEW & SCHENGEN JURISDICTION", title_style))
    story.append(Paragraph("Breakdown of nights spent across territories establishing France as primary destination", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=0, spaceAfter=8))

    # Schengen Country Breakdown Table
    country_data = [
        [Paragraph("Country / Territory", table_header),
         Paragraph("Cities / Regions", table_header),
         Paragraph("Nights", table_header),
         Paragraph("Travel Purpose & Key Sights", table_header)]
    ]
    rows_c = [
        ("FRANCE\n(Main Destination)", "Strasbourg, Colmar, Paris, Versailles", "7 Nights\n(5 Paris + 2 Alsace)", "Alsace Christmas Markets, Louvre Museum, Eiffel Tower (NYE), Palace of Versailles"),
        ("Netherlands", "Amsterdam", "3 Nights", "Amsterdam Light Festival, Rijksmuseum, Ice Village Market, Canals"),
        ("Germany", "Cologne, Kehl", "2 Nights", "Cologne Cathedral Christmas Market, Lindt Chocolate Museum, Kehl Base"),
        ("Switzerland", "Zurich, Interlaken, Lake Brienz, Sigriswil", "4 Nights", "CLOY Filming Locations (Iseltwald, Sigriswil, First Flieger, Lindenhof)"),
        ("Overnight Transit", "FlixBus Inter-City Night Routes", "4 Nights", "Sleeper coach transit to maximize daytime sightseeing between major hubs")
    ]
    for c, r, n, p in rows_c:
        country_data.append([
            Paragraph(f"<b>{c}</b>", table_cell_bold if "FRANCE" in c else table_cell),
            Paragraph(r, table_cell),
            Paragraph(f"<b>{n}</b>" if "FRANCE" in c else n, table_cell_bold if "FRANCE" in c else table_cell),
            Paragraph(p, table_cell)
        ])
    country_data.append([
        Paragraph("<b>TOTAL SCHENGEN STAY</b>", table_cell_bold),
        Paragraph("Continuous Single Entry", table_cell_bold),
        Paragraph("<b>18 Nights</b>", table_cell_bold),
        Paragraph("<b>16 Dec 2026 – 03 Jan 2027 (Exits 04 Jan to London)</b>", table_cell_bold)
    ])

    t_country = Table(country_data, colWidths=[1.4*inch, 1.8*inch, 1.1*inch, 2.9*inch])
    t_country.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('BACKGROUND', (0,1), (-1,1), colors.HexColor("#eff6ff")), # highlight France
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_country)
    story.append(Spacer(1, 14))

    # Flight Summary Table
    story.append(Paragraph("Confirmed International Flights (China Southern Airlines)", h1_style))
    story.append(Paragraph("<b>Order No.:</b> Go260821306082600034 | <b>E-Ticket No.:</b> 7842208774170 (Fully Paid)", body_style))
    story.append(Spacer(1, 4))

    flight_data = [
        [Paragraph("Date & Route", table_header),
         Paragraph("Flight No. (Aircraft)", table_header),
         Paragraph("Departure", table_header),
         Paragraph("Arrival", table_header),
         Paragraph("Status", table_header)]
    ]
    f_rows = [
        ("12 Dec 2026\nManila ➔ Guangzhou", "CZ5052 (B738)", "MNL Terminal 3\n03:20", "CAN Terminal 2\n05:50", "Confirmed\nEconomy"),
        ("12 Dec 2026\nGuangzhou ➔ London", "CZ303 (B789)", "CAN Terminal 2\n13:40", "LHR Terminal 4\n18:35", "Confirmed\nEconomy"),
        ("08 Jan 2027\nLondon ➔ Guangzhou", "CZ690 (B789)", "LGW South\n09:50", "CAN Terminal 2\n05:35 (+1d)", "Confirmed\nEconomy"),
        ("09 Jan 2027\nGuangzhou ➔ Manila", "CZ5051 (B738)", "CAN Terminal 2\n09:40", "MNL Terminal 3\n12:20", "Confirmed\nEconomy")
    ]
    for r, f, d, a, s in f_rows:
        flight_data.append([
            Paragraph(r, table_cell_bold),
            Paragraph(f, table_cell),
            Paragraph(d, table_cell),
            Paragraph(a, table_cell),
            Paragraph(s, table_cell)
        ])
    t_flight = Table(flight_data, colWidths=[1.8*inch, 1.4*inch, 1.4*inch, 1.4*inch, 1.2*inch])
    t_flight.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_flight)
    story.append(Spacer(1, 14))

    # Expense & Budget Summary Table
    story.append(Paragraph("Trip Cost & Budget Summary (Per-Applicant Share)", h1_style))
    budget_data = [
        [Paragraph("Expense Category", table_header),
         Paragraph("Description & Scope", table_header),
         Paragraph("Applicant Share", table_header)]
    ]
    b_rows = [
        ("Accommodations", "Amsterdam (AUD 111.50) + Cologne (AUD 211.34) + Kehl/Alsace (AUD 174.98) + Switzerland (AUD 600.00 Est.) + Paris (AUD 336.27)", "AUD 1,434.09"),
        ("Inter-City Transit", "FlixBus sleeper routes: London➔AMS, AMS➔CGN, CGN➔Kehl, Kehl➔ZRH, ZRH➔Paris, Paris➔London", "AUD 412.98"),
        ("Sightseeing & Dining", "Louvre Museum, Versailles, Seine Cruise, CLOY excursion transit & tickets, daily food allowance", "AUD 1,500.00 (Est.)"),
        ("TOTAL ESTIMATED BUDGET", "Full 21-Day Multi-Country Schengen Winter Itinerary", "AUD 3,347.07 (~€2,050)")
    ]
    for c, d, s in b_rows:
        is_total = "TOTAL" in c
        budget_data.append([
            Paragraph(f"<b>{c}</b>" if is_total else c, table_cell_bold if is_total else table_cell),
            Paragraph(d, table_cell),
            Paragraph(f"<b>{s}</b>" if is_total else s, table_cell_bold if is_total else table_cell)
        ])
    t_budget = Table(budget_data, colWidths=[1.8*inch, 4.0*inch, 1.4*inch])
    t_budget.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor("#f1f5f9")),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t_budget)

    story.append(PageBreak())

    # ==================== PAGES 3-4: DAY-TO-DAY DETAILED ITINERARY ====================
    story.append(Paragraph("DETAILED DAY-TO-DAY SCHENGEN ITINERARY", title_style))
    story.append(Paragraph("Complete breakdown of activities, sights, transit and accommodations (15 Dec 2026 – 04 Jan 2027)", subtitle_style))
    story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=0, spaceAfter=8))

    itinerary_data = [
        [Paragraph("Day / Date", table_header),
         Paragraph("Location", table_header),
         Paragraph("Daily Activities & Key Highlights", table_header),
         Paragraph("Accommodation / Transit", table_header)]
    ]

    days = [
        ("Day 1\n15 Dec 2026", "London ➔\nAmsterdam", "Depart London Victoria Coach Station at 10:00 pm via overnight FlixBus N824 across the English Channel to the Netherlands.", "Transit: FlixBus N824\n(Overnight Coach)"),
        ("Day 2\n16 Dec 2026", "Amsterdam\n(Netherlands)", "Arrive Amsterdam Centraal (De Ruijterkade) at 10:25 am. Hotel check-in. Evening walking tour of the Amsterdam Light Festival along historic canals.", "Amsterdam Hostel Leidseplein\n(Leidseplein, Amsterdam)"),
        ("Day 3\n17 Dec 2026", "Amsterdam\n(Netherlands)", "Morning cultural tour of the Rijksmuseum (Dutch Masters). Afternoon visit to the Ice Village Christmas Market at Museumplein.", "Amsterdam Hostel Leidseplein\n(Leidseplein, Amsterdam)"),
        ("Day 4\n18 Dec 2026", "Amsterdam\n(Netherlands)", "Daytime canal cruise through UNESCO canal ring, Jordaan district walk. Late-night transfer to Amsterdam Sloterdijk for FlixBus departure.", "Amsterdam Hostel Leidseplein\n(Night transit to CGN)"),
        ("Day 5\n19 Dec 2026", "Cologne\n(Germany)", "FlixBus departs 12:45 am, arrives Cologne Airport 04:40 am. Take S-Bahn to city center. Tour the Lindt Chocolate Museum and Rhine Promenade.", "Hotel Innception\n(Hohenzollernring, Cologne)"),
        ("Day 6\n20 Dec 2026", "Cologne\n(Germany)", "Marvel at the Cologne Cathedral (Kölner Dom). Tour the Cathedral Christmas Market & Heinzels Wintermärchen Market in Old Town.", "Hotel Innception\n(Hohenzollernring, Cologne)"),
        ("Day 7\n21 Dec 2026", "Cologne ➔\nKehl (Germany)", "Check-out by 12:00 pm. Afternoon exploration of Cologne Belgisches Viertel. Late-night transit transfer to Kehl (02:20 am FlixBus).", "Transit: FlixBus Overnight\n(Transfer Frankfurt)"),
        ("Day 8\n22 Dec 2026", "Kehl & Strasbourg\n(Germany/France)", "Arrive Kehl at 09:15 am. Check into B&B Hotel. Hop on direct cross-border Strasbourg Tram into France. Experience Place Kléber Great Tree & Christkindelsmärik.", "B&B Hotel Kehl\n(15 Allensteiner Str., Kehl)"),
        ("Day 9\n23 Dec 2026", "Colmar & Alsace\n(France)", "Fairytale Alsace Day Trip: 30-minute TER regional train excursion to fairytale Colmar. Explore illuminated half-timbered houses of Petite Venise.", "B&B Hotel Kehl\n(15 Allensteiner Str., Kehl)"),
        ("Day 10\n24 Dec 2026", "Kehl ➔ Zurich\n(Switzerland)", "Scenic morning train from Kehl to Zurich. Explore Zurich Altstadt, Lindenhof viewpoint, and Münsterbrücke ('Crash Landing on You' locations).", "Swiss Alps Base\n(Zurich / Interlaken TBD)"),
        ("Day 11\n25 Dec 2026", "Lake Brienz\n(Switzerland)", "Christmas in the Alps: Day trip to Iseltwald on Lake Brienz. Visit the iconic lakeside piano pier from Crash Landing on You.", "Swiss Alps Base\n(Zurich / Interlaken TBD)"),
        ("Day 12\n26 Dec 2026", "Sigriswil\n(Switzerland)", "CLOY High Alps: Excursion to Lake Thun and the dramatic Panoramabrücke Sigriswil suspension bridge overlooking the Swiss Alps.", "Swiss Alps Base\n(Zurich / Interlaken TBD)"),
        ("Day 13\n27 Dec 2026", "Grindelwald\n(Switzerland)", "Alpine Adventure: Take the gondola up to First Flieger in Grindelwald (CLOY reunion scene setting). Enjoy snow-covered panoramic peaks.", "Swiss Alps Base\n(Zurich / Interlaken TBD)"),
        ("Day 14\n28 Dec 2026", "Zurich ➔ Paris\n(Switzerland/France)", "Final morning in Zurich shopping and visiting Lake Zurich. Board 09:00 pm overnight sleeper FlixBus direct to Paris Bercy Seine.", "Transit: FlixBus Overnight\n(Zurich to Paris)"),
        ("Day 15\n29 Dec 2026", "Paris\n(France - Main)", "Arrive Paris Bercy 06:40 am. Drop bags at hotel. Explore Montmartre, Sacré-Cœur basilica steps, Place du Tertre, and evening Seine stroll.", "Break & Home Paris Italie\n(Porte de Choisy, Paris)"),
        ("Day 16\n30 Dec 2026", "Paris\n(France - Main)", "Cultural Masterpieces: Morning guided tour of the Louvre Museum. Afternoon at Galeries Lafayette Haussmann holiday dome & rooftop.", "Break & Home Paris Italie\n(Porte de Choisy, Paris)"),
        ("Day 17\n31 Dec 2026", "Paris (NYE)\n(France - Main)", "New Year's Eve: Eiffel Tower, Champ de Mars, Trocadéro photos. Ring in 2027 during the midnight countdown on the Champs-Élysées.", "Break & Home Paris Italie\n(Porte de Choisy, Paris)"),
        ("Day 18\n01 Jan 2027", "Paris\n(France - Main)", "New Year's Day: Relaxed morning walk through Luxembourg Gardens and Latin Quarter. Evening illuminated Seine River Dinner Cruise.", "Break & Home Paris Italie\n(Porte de Choisy, Paris)"),
        ("Day 19\n02 Jan 2027", "Versailles\n(France - Main)", "Royal Palace Excursion: RER Line C to Palace of Versailles. Tour the magnificent Hall of Mirrors and Royal Gardens.", "Break & Home Paris Italie\n(Porte de Choisy, Paris)"),
        ("Day 20\n03 Jan 2027", "Paris ➔ London\n(Schengen Exit)", "Final souvenir shopping in Le Marais. Pick up luggage at hotel. Board 11:00 pm FlixBus at Paris Bercy to return to London.", "Transit: FlixBus Overnight\n(Paris to London Victoria)"),
        ("Day 21\n04 Jan 2027", "London\n(United Kingdom)", "Arrive London Victoria Coach Station at 07:25 am. Rejoin family and Aunt Maria at Southampton residence for remainder of UK stay.", "UK Family Residence\n(Southampton, UK)")
    ]

    for d, loc, act, acc in days:
        is_france = "France" in loc or "Paris" in loc
        row_bg = colors.HexColor("#eff6ff") if is_france else colors.white
        itinerary_data.append([
            Paragraph(f"<b>{d}</b>", table_cell_bold),
            Paragraph(f"<b>{loc}</b>", table_cell_bold if is_france else table_cell),
            Paragraph(act, table_cell),
            Paragraph(acc, table_cell)
        ])

    t_itin = Table(itinerary_data, colWidths=[1.1*inch, 1.4*inch, 2.9*inch, 1.8*inch])
    t_itin.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 3.5),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3.5),
    ]))
    story.append(t_itin)

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    output_path = "/Users/jeana/Projects/schengen-trip-2026/Schengen_Visa_Cover_Letter_Itinerary_Jean_Aquino.pdf"
    build_pdf(output_path)
