
# Resume Builder

A simple web-based **Resume Builder** that allows users to generate resumes dynamically and download them as PDF files.  
Built with **HTML**, **CSS**, and **JavaScript** (with **jsPDF** for PDF generation).

## Features

- User-friendly form to input:
  - Full Name
  - Email
  - Education
  - Skills (comma-separated)
  - Experience
- Optionally upload an AI-generated PDF report.
- Instant resume preview in the browser.
- Download generated resume as a PDF.



## How It Works

1. Fill out the form fields.
2. Click **Generate Resume** to preview the resume.
3. Click **Download as PDF** to download the resume using **jsPDF**.

## Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript (Vanilla)** – Functionality
- **jsPDF** – PDF generation (via CDN)

## Project Structure

```
├── index.html       # Main HTML file
├── style.css        # Styling file
├── java.js          # Main JS logic (form handling, PDF generation)
```

## Installation & Usage

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder
```

2. **Run Locally**

Open `index.html` in your browser. No server setup is required.

## Dependencies

- [jsPDF](https://cdnjs.com/libraries/jspdf)

## Customization

- Modify `style.css` for UI customization.
- Extend `java.js` to add more resume sections or features.

## License

This project is licensed under the **MIT License**.
