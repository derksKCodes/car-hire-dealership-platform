# Car Hire & Sales Marketplace

A comprehensive full-stack web application that combines a car rental system with a car dealership marketplace, allowing users to hire cars, buy cars, and sell cars with integrated payment processing and administrative management.

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [AI Integration](#ai-integration)
- [Payment Integration](#payment-integration)
- [Monetization](#monetization)
- [Deployment](#deployment)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About The Project

This car marketplace platform serves as a comprehensive solution for automotive transactions, combining three core functionalities:

1. **Car Rental System** - Users can browse and book rental cars for short-term use
2. **Car Sales Marketplace** - A platform for buying and selling vehicles
3. **Dealer Management** - Tools for car dealers to manage their inventory and sales

The platform features modern UI/UX design, secure payment processing, user authentication, and comprehensive administrative tools for platform management.

## Features

### Core Features
- **Multi-purpose Platform**: Car rentals, sales, and dealer management in one application
- **User Authentication**: Secure login/signup with email verification via Supabase Auth
- **Advanced Search & Filtering**: Find cars by make, model, year, price, location, and more
- **Image Upload**: Multiple image support for car listings
- **Responsive Design**: Mobile-first approach with modern UI components
- **Real-time Updates**: Live data synchronization across the platform

### Car Rental System
- Browse available rental cars with detailed specifications
- Advanced filtering (price range, car type, features, location)
- Interactive booking system with date selection
- Pricing calculator (daily, weekly, monthly rates)
- Booking management and history

### Car Sales Marketplace
- Comprehensive car listings with detailed information
- Vehicle history reports and dealer information
- Car comparison tool (compare up to 3 vehicles)
- Purchase options (cash, financing, trade-in)
- Loan calculator integration

### Seller/Dealer Dashboard
- Add and manage car listings
- Upload multiple images per listing
- Track views, inquiries, and bookings
- Analytics and performance metrics
- Revenue tracking and reporting

### Payment Integration
- **Multiple Payment Methods**:
  - Credit/Debit Cards (Stripe)
  - M-Pesa (Mobile Money)
  - PayPal
- Secure payment processing
- Transaction history and receipts
- Automated payment confirmations

### Admin Panel
- User management and moderation
- Listing approval and review system
- Transaction monitoring
- Platform analytics and reporting
- Security and fraud prevention tools

## Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Authentication
  - Real-time subscriptions
  - Row Level Security (RLS)

### Payment Processing
- **Stripe** - Credit card processing
- **M-Pesa API** - Mobile money (Kenya)
- **PayPal** - Digital wallet payments

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Project Structure

\`\`\`
car-marketplace/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin panel pages
│   ├── auth/                     # Authentication pages
│   ├── cars/                     # Car sales pages
│   ├── compare/                  # Car comparison
│   ├── dashboard/                # User dashboard
│   ├── rent/                     # Car rental pages
│   ├── sell/                     # Sell car pages
│   ├── api/                      # API routes
│   │   └── payments/             # Payment processing endpoints
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   ├── admin-dashboard.tsx       # Admin components
│   ├── navbar.tsx                # Navigation
│   ├── payment-modal.tsx         # Payment processing
│   └── ...                       # Other components
├── lib/                          # Utility libraries
│   ├── supabase/                 # Supabase client configuration
│   ├── payments/                 # Payment integrations
│   └── utils.ts                  # Utility functions
├── scripts/                      # Database scripts
│   ├── 001_create_tables.sql     # Database schema
│   ├── 002_create_profile_trigger.sql
│   └── 003_seed_sample_data.sql  # Sample data
├── public/                       # Static assets
└── middleware.ts                 # Next.js middleware
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account
- Stripe account (for payments)
- M-Pesa developer account (optional)
- PayPal developer account (optional)

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Database
POSTGRES_URL=your_postgres_connection_string
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_non_pooling_url

# Payment Processing
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
MPESA_CONSUMER_KEY=your_mpesa_consumer_key
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# Application
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback
\`\`\`

## Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/derksKCodes/car-hire-dealership-platform.git
   cd car-hire-dealership-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up the database**
   - Create a new Supabase project
   - Run the SQL scripts in the `scripts/` folder in order:
     \`\`\`sql
     -- Run these in your Supabase SQL editor
     -- 1. scripts/001_create_tables.sql
     -- 2. scripts/002_create_profile_trigger.sql
     -- 3. scripts/003_seed_sample_data.sql
     \`\`\`

4. **Configure environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase and payment provider credentials

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Supabase Setup

1. **Create a new Supabase project**
2. **Configure Authentication**
   - Enable email authentication
   - Set up email templates
   - Configure redirect URLs

3. **Set up Row Level Security (RLS)**
   - All tables have RLS enabled by default
   - Policies are configured for secure data access

4. **Configure Storage (Optional)**
   - Set up storage buckets for car images
   - Configure upload policies

### Payment Configuration

#### Stripe Setup
1. Create a Stripe account
2. Get your API keys from the Stripe dashboard
3. Configure webhooks for payment confirmations

#### M-Pesa Setup (Kenya)
1. Register for M-Pesa developer account
2. Create a new app and get credentials
3. Configure STK Push settings

#### PayPal Setup
1. Create PayPal developer account
2. Create a new application
3. Get client ID and secret

## Usage

### For Customers

1. **Browse Cars**
   - Visit the homepage to see featured cars
   - Use `/rent` for rental cars or `/cars` for sales
   - Apply filters to find specific vehicles

2. **Book/Purchase**
   - Select a car and view details
   - Choose rental dates or purchase options
   - Complete payment through preferred method

3. **Manage Bookings**
   - Access dashboard to view booking history
   - Track rental periods and payments

### For Dealers/Sellers

1. **Create Account**
   - Sign up and select "Dealer" account type
   - Complete profile verification

2. **Add Listings**
   - Access seller dashboard
   - Add car details and upload images
   - Set pricing and availability

3. **Manage Business**
   - Track inquiries and bookings
   - View analytics and performance
   - Manage inventory and pricing

### For Administrators

1. **Access Admin Panel**
   - Navigate to `/admin` (requires admin privileges)
   - Monitor platform activity and users

2. **Manage Platform**
   - Review and approve listings
   - Monitor transactions and payments
   - Handle user reports and issues

## AI Integration

### Planned AI Features

1. **Price Estimation AI**
   - Automatic car valuation based on market data
   - Dynamic pricing suggestions for rentals

2. **Chatbot Integration**
   - Customer support automation
   - Booking assistance and FAQ handling

3. **Recommendation Engine**
   - Personalized car recommendations
   - Similar vehicle suggestions

### Implementation Notes
- AI features are designed to integrate with the existing architecture
- Uses modern AI APIs for natural language processing
- Maintains user privacy and data security

## Payment Integration

### Supported Payment Methods

1. **Credit/Debit Cards (Stripe)**
   - Secure card processing
   - International payments support
   - Automatic receipt generation

2. **M-Pesa (Mobile Money)**
   - STK Push integration
   - Real-time payment confirmation
   - Popular in East Africa

3. **PayPal**
   - Digital wallet payments
   - Buyer protection included
   - Global payment support

### Security Features
- PCI DSS compliant payment processing
- Encrypted payment data transmission
- Fraud detection and prevention
- Secure payment confirmations

## Monetization

### Revenue Streams

1. **Commission-based Model**
   - Take percentage from each transaction
   - Tiered commission rates for dealers

2. **Subscription Plans**
   - Premium dealer accounts with enhanced features
   - Featured listing placements

3. **Advertising Revenue**
   - Sponsored car listings
   - Banner advertisements
   - Promoted dealer profiles

4. **Service Fees**
   - Payment processing fees
   - Premium support services
   - Additional feature access

### Pricing Strategy
- Competitive commission rates (3-5%)
- Flexible subscription tiers
- Value-added services for premium users

## Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**
   \`\`\`bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   \`\`\`

2. **Configure Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Ensure production URLs are updated

3. **Set up Custom Domain**
   - Configure DNS settings
   - Enable SSL certificates

### Alternative Deployment Options

- **Netlify**: Full-stack deployment with serverless functions
- **Railway**: Database and application hosting
- **DigitalOcean**: VPS deployment with Docker
- **AWS**: Scalable cloud deployment

### Production Checklist

- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] Payment webhooks configured
- [ ] SSL certificates installed
- [ ] Performance monitoring enabled
- [ ] Backup systems in place

## Customization

### Theming
- Modify `app/globals.css` for global styles
- Update color scheme in Tailwind configuration
- Customize component themes in `components/ui/`

### Adding Features
- Create new pages in `app/` directory
- Add components in `components/` folder
- Extend database schema with new migrations

### Branding
- Replace logo and favicon in `public/` folder
- Update site metadata in `app/layout.tsx`
- Customize email templates in Supabase

## Screenshots

### Homepage
![Homepage](public/modern-car-showroom-with-luxury-vehicles.jpg)
*Modern homepage with featured cars and search functionality*

### Car Rental Page
*Browse available rental cars with advanced filtering options*

### Seller Dashboard
*Comprehensive dashboard for managing car listings and analytics*

### Payment Processing
*Secure multi-method payment processing interface*

### Admin Panel
*Complete administrative control panel for platform management*

## Contributing

We welcome contributions to improve the car marketplace platform!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Make your changes**
4. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
5. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
6. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Write comprehensive tests for new features
- Update documentation for any changes
- Ensure responsive design compatibility
- Follow the existing code style and conventions

### Bug Reports

Please use GitHub Issues to report bugs:
- Provide detailed reproduction steps
- Include screenshots if applicable
- Specify browser and device information

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-party Licenses
- Next.js: MIT License
- Supabase: Apache 2.0 License
- Tailwind CSS: MIT License
- shadcn/ui: MIT License

## Contact

### Project Maintainers
- **Developer**: Derrick - [Website](https://derrickportfolioweb.vercel.app/)

<!-- ### Support
- **Documentation**: [docs.carmarketplace.com](https://docs.carmarketplace.com)
- **Support Email**: [support@carmarketplace.com](mailto:support@carmarketplace.com)
- **Community Discord**: [discord.gg/carmarketplace](https://discord.gg/carmarketplace) -->

### Links
- **Live Demo**: [https://motorharbor.vercel.app](https://motorharbor.vercel.app)
- **GitHub Repository**: [https://github.com/derksKCodes/car-hire-dealership-platform.git](https://github.com/derksKCodes/car-hire-dealership-platform.git)
- **Project Website**: [https://carmarketplace.com](https://carmarketplace.com)

---

**Built with ❤️ using Next.js, Supabase, and modern web technologies**

*Last updated: September 2025*
