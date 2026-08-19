# كتب كتاب - دعوة زفاف رقمية

A production-ready, ultra-minimalist, luxury Arabic landing page for Katb Ktab (Marriage Contract Ceremony) digital invitations.

## 🎨 Features

- **Elegant Design**: Warm linen/paper texture background with matte gold accents
- **Smooth Animations**: 60fps Framer Motion animations with reveal effects
- **RTL Support**: Full Arabic language support with proper right-to-left layout
- **Responsive**: Mobile-first design optimized for all screen sizes
- **Interactive Components**:
  - Splash screen with heartbeat animation
  - Countdown timer to the event
  - RSVP modal with Google Sheets integration
  - Google Maps location integration
  - Fixed header with scroll effects

## 📁 Project Structure

```
katb-ktab-invitation/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx       # Reusable button component
│   │   │   ├── Card.tsx         # Card container with animations
│   │   │   └── Modal.tsx        # Modal dialog component
│   │   ├── SplashScreen.tsx    # Initial splash with heartbeat
│   │   ├── Header.tsx          # Bismillah and Quranic verse
│   │   ├── Invitation.tsx      # Main invitation card
│   │   ├── Countdown.tsx       # Event countdown timer
│   │   ├── Location.tsx        # Location with maps integration
│   │   └── RSVPModal.tsx       # RSVP form modal
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── App.tsx                 # Main app with animation flow
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML with RTL support
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the local URL (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## ⚙️ Configuration

### Update Invitation Details

Edit the `invitationData` object in `src/App.tsx`:

```typescript
const invitationData: InvitationData = {
  groomName: 'الاسم هنا',        // Groom's name
  brideName: 'الاسم هنا',        // Bride's name
  date: 'التاريخ هنا',           // Event date
  time: 'الوقت هنا',             // Event time
  location: 'العنوان هنا',       // Location address
  locationUrl: 'https://maps.google.com',  // Google Maps URL
  googleSheetsUrl: 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE',  // Google Apps Script URL
};
```

### Update Countdown Date

Edit the target date in `src/App.tsx`:

```typescript
<Countdown targetDate="2024-12-31T20:00:00" />
```

### Google Sheets Integration

To set up the RSVP form with Google Sheets:

1. Create a new Google Sheet
2. Add headers: `fullName`, `guestCount`, `timestamp`
3. Create a Google Apps Script:
   - Extensions > Apps Script
   - Use the following code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.fullName, data.guestCount, new Date()]);
  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as Web App:
   - Deploy > New Deployment
   - Select type: Web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the Web App URL
6. Update `googleSheetsUrl` in `src/App.tsx`

## 🎨 Customization

### Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  background: '#FDFBF7',  // Warm linen
  charcoal: '#2D251E',    // Deep charcoal
  gold: '#C5A85A',        // Matte gold
  'gold-light': '#D4B96A',
  'gold-dark': '#B8974A',
}
```

### Fonts

The project uses Google Fonts:
- **Amiri**: For headings and Arabic calligraphy
- **Tajawal**: For body text and UI elements
- **Cairo**: Alternative for UI elements

To change fonts, update `index.html` and `tailwind.config.ts`.

## 📱 Responsive Design

The design is mobile-first with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🛠️ Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions or support, please open an issue in the repository.
