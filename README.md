
# **Docx to PDF Converter & PDF Password Protection Application**

## **Summary**
This application provides two core features:  
1. **Convert DOCX to PDF**: Easily upload DOCX files, convert them to PDF format, and download the result.  
2. **Password Protect PDFs**: Add password protection to your PDF files for enhanced security.

### **Live Demo**  
[Try the Application Here](https://rapidfortproject-rjduk8ui.b4a.run/)

---

## **Features**
- **DOCX to PDF Conversion**: Converts text content from DOCX files into PDF format using advanced text extraction techniques.
- **PDF Password Protection**: Uses AES-256 encryption to secure PDF files with user-defined passwords.
- **User-Friendly Interface**: Simple, intuitive pages for file upload, processing, and download.

---

## **Tools & Technologies**
- **Backend**: Node.js, Express.js
- **Libraries**:  
  - `pdf-lib` for PDF creation
  - `mammoth` for extracting DOCX content
  - `node-qpdf` for PDF encryption
- **Frontend**: EJS (Embedded JavaScript Templates) for rendering dynamic pages
- **File System**: Local storage for temporary file handling

---

## **Getting Started**

### **Prerequisites**
- Node.js (v18 or higher)
- npm (Node Package Manager)

### **Run Locally**
1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Application**  
   ```bash
   npm start
   ```
   The application will run at `http://localhost:3000`.

4. **Access Features**  
   - Navigate to `/convert` to convert DOCX to PDF.  
   - Navigate to `/protect` to add password protection to PDFs.

---

## **Folder Structure**
```
|-- controllers/
|   |-- convertController.js
|   |-- protectController.js
|-- services/
|   |-- convertService.js
|   |-- protectService.js
|-- views/
|   |-- convert.ejs
|   |-- index.ejs
|   |-- protect.ejs
|-- public/
|   |-- styles.css
|-- app.js
|-- package.json
```

### **1. Controllers**
- **Convert Controller**: Manages DOCX-to-PDF conversion requests.
- **Protect Controller**: Manages PDF encryption requests.

### **2. Services**
- **Convert Service**: Implements logic for extracting DOCX content and generating PDFs.
- **Protect Service**: Adds password protection to PDFs using `node-qpdf`.

### **3. Views**
- **Convert Page**: Allows DOCX file upload and displays conversion results.
- **Protect Page**: Allows PDF file upload, password input, and displays secured file download.

---

## **How to Contribute**
We welcome all contributions to improve this application.  

### **Steps to Contribute**
1. Fork the repository.  
2. Create a feature branch.  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes.  
   ```bash
   git commit -m "Add feature XYZ"
   ```
4. Push your branch and create a pull request.  
   ```bash
   git push origin feature-name
   ```

---

## **Contact**
For issues or suggestions, please open an issue on the repository or contact the developer directly.

**Live Demo**: [https://rapidfortproject-rjduk8ui.b4a.run/](https://rapidfortproject-rjduk8ui.b4a.run/)

**Linkedin**: [https://www.linkedin.com/in/hitesh-jain-9247421a0/](https://www.linkedin.com/in/hitesh-jain-9247421a0/)
