# EmailJS Setup Instructions

The contact form uses EmailJS to send emails without a backend server.

## Setup Steps:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (allows 200 emails/month)

### 2. Add Email Service
- Go to "Email Services" in your dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the connection steps

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use these template variables in your template:
  - `{{name}}` - sender's name
  - `{{email}}` - sender's email
  - `{{phone}}` - sender's phone
  - `{{message}}` - sender's message
  
Example template:
```
New Contact Form Submission

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}
```

### 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section
- **Public Key**: Found in Account > API Keys

### 5. Update the Code
Open `src/Components/ContactForm/ContactForm.js` and replace these lines (around line 24-26):

```javascript
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

### 6. Test It!
- Run your app
- Go to Contact page
- Fill out the form
- You should receive an email!

## Troubleshooting

If emails aren't sending:
1. Check browser console for errors
2. Verify your credentials are correct
3. Make sure template variable names match exactly
4. Check EmailJS dashboard for usage limits

## Alternative: Form Without EmailJS

If you don't want to set up EmailJS, you can:
1. Change the form to just display a "Thank you" message
2. Store submissions in localStorage
3. Set up a simple backend API endpoint
