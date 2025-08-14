# Marble Project - Info Site

A modern, fast, and SEO-optimized information site built with Next.js, TypeScript, Tailwind CSS, and SASS.

## 🚀 Features

- **Next.js 15** - Latest version with App Router
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **SASS** - Advanced CSS with variables, mixins, and nesting
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap
- **Performance** - Image optimization, compression, security headers
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SASS
- **Package Manager**: npm
- **Linting**: ESLint
- **SEO**: next-seo

## 📁 Project Structure

```
info-site/
├── src/
│   └── app/
│       ├── globals.scss      # Main SASS file with Tailwind imports
│       ├── layout.tsx        # Root layout with SEO metadata
│       └── page.tsx          # Homepage component
├── public/
│   ├── robots.txt            # SEO robots file
│   ├── sitemap.xml          # SEO sitemap
│   └── manifest.json        # PWA manifest
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd info-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### SASS Variables

Edit `src/app/globals.scss` to customize:
- Color variables
- Typography
- Spacing
- Breakpoints
- Component styles

### Tailwind Configuration

Modify `tailwind.config.ts` to:
- Add custom colors
- Extend spacing
- Add custom animations
- Configure plugins

### SEO Configuration

Update `src/app/layout.tsx` to customize:
- Page titles and descriptions
- Open Graph tags
- Twitter Cards
- Meta keywords

## 🔧 Configuration Files

### next.config.ts
- Image optimization settings
- Security headers
- Performance optimizations
- Experimental features

### tailwind.config.ts
- Content paths
- Theme customization
- Plugin configuration

### tsconfig.json
- TypeScript compiler options
- Path mapping
- Strict mode settings

## 📱 Responsive Design

The site is built with a mobile-first approach using Tailwind CSS responsive utilities:
- `sm:` - Small devices (640px+)
- `md:` - Medium devices (768px+)
- `lg:` - Large devices (1024px+)
- `xl:` - Extra large devices (1280px+)

## 🚀 Performance Features

- **Image Optimization**: WebP and AVIF formats
- **Compression**: Built-in gzip compression
- **Security Headers**: XSS protection, content type validation
- **Font Optimization**: Next.js font optimization
- **Code Splitting**: Automatic route-based code splitting

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Ready for schema markup

## 🎯 Best Practices

- **Type Safety**: Full TypeScript coverage
- **Component Design**: Reusable and maintainable components
- **Performance**: Optimized images and code splitting
- **Accessibility**: WCAG compliant markup
- **Security**: Security headers and best practices

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SASS Documentation](https://sass-lang.com/documentation)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help, please open an issue in the repository.
