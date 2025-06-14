# Certificate Validation System
## 📝 Project Description
The Certificate Validation System is a platform that allows educational institutions to generate and issue certificates with unique QR codes. These QR codes, when scanned, enable verification of the certificate's authenticity, ensuring that it was issued by the respective institution. Additionally, certificate holders can log in to view and manage their certificates from different institutions.
## 🚀 Features
### Institution Portal:
- Generate and issue certificates with unique QR codes for each graduate.
- Manage issued certificates.
### QR Code Verification:
- Users can scan the QR code on a certificate to verify its validity and origin.
### User Portal:
- Certificate owners can log in and view all their issued certificates from multiple institutions.
- Manage and download certificates.
### Security & Uniqueness:
- Each certificate is assigned a UUID (Universally Unique Identifier) to prevent duplication.
- Secure access to certificates to prevent unauthorized modifications.
## 🛠️ Technology Stack
- Backend: NestJS
- Database: MySql
- QR Code Generation: qrcode.js
- Authentication and authorization: jwt
- encryption: bcrypt
## Installation & Setup:
Clone the repository:
```
git clone https://github.com/younessaitbenyssa/NestJSProject.git
```
Install dependencies:
```
cd NestJSProject
npm install
```
Run the application:
```
npm run start
```
## Usage 
- Institutions: Register, generate, and manage certificates.
- Users: Login to access and verify certificates.
- Public Users: Scan QR codes to validate certificates instantly.
## Contributors
- [Yassine OUABOU](https://github.com/yassineouabou)
