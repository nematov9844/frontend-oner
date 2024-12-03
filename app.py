from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
import os

# File path to save the styled PDF
styled_file_path = r"C:\Users\jeki2\Desktop\Nematov_Ro'zimuhammad_Styled_Resume.pdf"

# Ensure the folder exists
folder_path = os.path.dirname(styled_file_path)
if not os.path.exists(folder_path):
    os.makedirs(folder_path)

# Create a canvas
pdf = canvas.Canvas(styled_file_path, pagesize=A4)
width, height = A4

# Colors and styling
main_color = colors.HexColor("#003366")
secondary_color = colors.HexColor("#008080")
header_bg_color = colors.HexColor("#F2F2F2")
text_color = colors.black

# Header section
pdf.setFillColor(main_color)
pdf.rect(0, height - 80, width, 80, stroke=0, fill=1)
pdf.setFont("Helvetica-Bold", 20)
pdf.setFillColor(colors.white)
pdf.drawCentredString(width / 2, height - 50, "Nematov Ro'zimuhammad - Front-end Developer")

# Personal Information
pdf.setFillColor(text_color)
pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, height - 120, "Shaxsiy Ma'lumotlar:")
pdf.setFont("Helvetica", 12)
contact_info = """
Telefon: +998 91 202 35 25
Email: jeki2004114@gmail.com
GitHub: https://github.com/nematov9844
"""
pdf.drawString(50, height - 140, contact_info.strip())

# Add a line under contact info
pdf.setStrokeColor(secondary_color)
pdf.line(50, height - 160, width - 50, height - 160)

# Summary Section
summary_title_y = height - 180
pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, summary_title_y, "Qisqa Tanishtiruv:")
pdf.setFont("Helvetica", 12)
summary_text = (
    "Tayyorlanayotgan front-end dasturchi, zamonaviy texnologiyalarni o‘zlashtirishga qiziqaman. "
    "O‘quv markazda o‘rgangan bilimlarimni haqiqiy loyihalarda qo‘llab, dasturlashda katta muvaffaqiyatlarga "
    "erishishni maqsad qilganman."
)
pdf.drawString(50, summary_title_y - 20, summary_text)

# Technical Skills Section
skills_title_y = summary_title_y - 80
pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, skills_title_y, "Texnologik Ko‘nikmalar:")
pdf.setFont("Helvetica", 12)
skills_text = """
- Dasturlash tillari: TypeScript, JavaScript
- Styling: CSS, SASS, SCSS, BEM metodologiyasi
- Framework va kutubxonalar: React, Redux
- UI Toolkits: Bootstrap, Tailwind CSS
- Tools va platformalar: Vite, Webpack, Git, Figma
"""
pdf.drawString(50, skills_title_y - 20, skills_text.strip())

# Education Section
education_title_y = skills_title_y - 140
pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, education_title_y, "Ta’lim:")
education_text = """
- Najot Ta’lim O‘quv Markazi
  Front-end Development bo‘yicha o‘qish
  *Yakunlagan yilingizni qo‘shing, masalan: 2024-yil*
"""
pdf.setFont("Helvetica", 12)
pdf.drawString(50, education_title_y - 20, education_text.strip())

# Languages Section
languages_title_y = education_title_y - 80
pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, languages_title_y, "Tillar:")
languages_text = """
- O‘zbek tili: Ona tili
- Rus tili: O‘rta darajada
"""
pdf.setFont("Helvetica", 12)
pdf.drawString(50, languages_title_y - 20, languages_text.strip())

# Portfolio Section
portfolio_title_y = languages_title_y - 80
pdf.setFont("Helvetica-Bold", 14)
pdf.drawString(50, portfolio_title_y, "Portfolio:")
portfolio_placeholder = "(Bu yerda loyihalaringizni qo‘shing. Masalan: GitHub yoki demo havolalari.)"
pdf.setFont("Helvetica", 12)
pdf.drawString(50, portfolio_title_y - 20, portfolio_placeholder)

# Footer
pdf.setFillColor(main_color)
pdf.rect(0, 0, width, 40, stroke=0, fill=1)
pdf.setFont("Helvetica", 10)
pdf.setFillColor(colors.white)
pdf.drawCentredString(width / 2, 15, "Nematov Ro'zimuhammad - Front-end Developer | Sahifa 1")

# Save the PDF
pdf.save()

print(f"PDF fayl muvaffaqiyatli yaratildi: {styled_file_path}")
