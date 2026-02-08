// PDF Generation utility using browser's print functionality with custom styling
// This creates clean, well-formatted PDFs without external dependencies

export interface PDFResource {
  title: string
  type: 'Report' | 'Guide' | 'Material'
  date: string
  category: string
  content: {
    introduction: string
    sections: Array<{
      heading: string
      text: string
      subsections?: Array<{
        subheading: string
        text: string
      }>
    }>
    conclusion?: string
  }
  metadata?: {
    author?: string
    organization?: string
    version?: string
  }
}

export const generatePDFContent = (resource: PDFResource): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${resource.title}</title>
      <style>
        @page {
          size: A4;
          margin: 2cm;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: white;
        }
        
        .pdf-container {
          max-width: 210mm;
          margin: 0 auto;
          padding: 20mm;
          background: white;
        }
        
        .header {
          border-bottom: 4px solid #2563eb;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        
        .logo-section {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .organization-name {
          font-size: 18px;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .document-title {
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        
        .document-type {
          display: inline-block;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .metadata {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin: 20px 0;
          padding: 20px;
          background: #f9fafb;
          border-radius: 8px;
          border-left: 4px solid #2563eb;
        }
        
        .metadata-item {
          font-size: 13px;
        }
        
        .metadata-label {
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 4px;
        }
        
        .metadata-value {
          color: #111827;
          font-weight: 500;
        }
        
        .introduction {
          font-size: 16px;
          line-height: 1.8;
          color: #374151;
          margin: 30px 0;
          padding: 25px;
          background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        
        .section {
          margin: 35px 0;
          page-break-inside: avoid;
        }
        
        .section-heading {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .section-text {
          font-size: 14px;
          line-height: 1.8;
          color: #4b5563;
          text-align: justify;
          margin-bottom: 15px;
        }
        
        .subsection {
          margin: 20px 0 20px 20px;
          padding-left: 20px;
          border-left: 3px solid #93c5fd;
        }
        
        .subsection-heading {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 10px;
        }
        
        .conclusion {
          margin: 40px 0;
          padding: 25px;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border-radius: 8px;
          border-left: 4px solid #10b981;
          page-break-inside: avoid;
        }
        
        .conclusion-heading {
          font-size: 20px;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 12px;
        }
        
        .conclusion-text {
          font-size: 14px;
          line-height: 1.8;
          color: #047857;
        }
        
        .footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 2px solid #e5e7eb;
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }
        
        .page-number {
          text-align: center;
          font-size: 11px;
          color: #9ca3af;
          margin-top: 20px;
        }
        
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .pdf-container {
            padding: 0;
          }
          
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="pdf-container">
        <!-- Header -->
        <div class="header">
          <div class="logo-section">
            <div class="organization-name">Big Ship Organization</div>
          </div>
          <h1 class="document-title">${resource.title}</h1>
          <span class="document-type">${resource.type}</span>
        </div>
        
        <!-- Metadata -->
        <div class="metadata">
          <div class="metadata-item">
            <div class="metadata-label">Date</div>
            <div class="metadata-value">${new Date(resource.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}</div>
          </div>
          <div class="metadata-item">
            <div class="metadata-label">Category</div>
            <div class="metadata-value">${resource.category}</div>
          </div>
          ${resource.metadata?.author ? `
          <div class="metadata-item">
            <div class="metadata-label">Author</div>
            <div class="metadata-value">${resource.metadata.author}</div>
          </div>
          ` : ''}
          ${resource.metadata?.version ? `
          <div class="metadata-item">
            <div class="metadata-label">Version</div>
            <div class="metadata-value">${resource.metadata.version}</div>
          </div>
          ` : ''}
        </div>
        
        <!-- Introduction -->
        <div class="introduction">
          ${resource.content.introduction}
        </div>
        
        <!-- Sections -->
        ${resource.content.sections.map(section => `
          <div class="section">
            <h2 class="section-heading">${section.heading}</h2>
            <p class="section-text">${section.text}</p>
            
            ${section.subsections ? section.subsections.map(subsection => `
              <div class="subsection">
                <h3 class="subsection-heading">${subsection.subheading}</h3>
                <p class="section-text">${subsection.text}</p>
              </div>
            `).join('') : ''}
          </div>
        `).join('')}
        
        <!-- Conclusion -->
        ${resource.content.conclusion ? `
          <div class="conclusion">
            <h2 class="conclusion-heading">Conclusion</h2>
            <p class="conclusion-text">${resource.content.conclusion}</p>
          </div>
        ` : ''}
        
        <!-- Footer -->
        <div class="footer">
          <p><strong>Big Ship Organization</strong></p>
          <p>Mombasa County, Kenya</p>
          <p>www.bigshiporganization.org</p>
          <p style="margin-top: 10px; font-size: 11px;">
            © ${new Date().getFullYear()} Big Ship Organization. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export const downloadPDF = (resource: PDFResource) => {
  const htmlContent = generatePDFContent(resource)
  const printWindow = window.open('', '_blank')
  
  if (printWindow) {
    printWindow.document.write(htmlContent)
    printWindow.document.close()
    
    // Wait for content to load before printing
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 250)
    }
  }
}
