# AGENTS.md - Development Guidelines for Lotto Number Generator

This document provides build/lint/test commands and code style guidelines for agentic coding agents working on this vanilla HTML/CSS/JavaScript project.

## Build/Lint/Test Commands

This is a simple vanilla web project without a build system. Use these commands for development:

### Development Server
```bash
# Use any static server for development
python3 -m http.server 8000
# or
npx serve .
# or
live-server
```

### Code Quality
```bash
# No formal linting configured - use browser console for error detection
# Validate HTML with W3C validator if needed
# Check JavaScript with browser dev tools
```

### Testing
```bash
# No test framework configured
# Manual testing required:
# 1. Open index.html in browser
# 2. Test number generation functionality
# 3. Verify responsive design on different screen sizes
# 4. Check console for errors
```

## Project Structure

```
/
├── index.html          # Main HTML entry point
├── main.js            # JavaScript logic and Web Components
├── style.css          # Global styles
├── blueprint.md       # Project documentation and plans
├── GEMINI.md          # AI development guidelines
└── README.md          # Project description
```

## Code Style Guidelines

### HTML Structure
- Use semantic HTML5 elements (`<main>`, `<header>`, `<section>`, etc.)
- Include proper DOCTYPE and meta tags
- Link external CSS and JS files correctly
- Use Web Components as custom elements
- Maintain clean, indented structure

### CSS Conventions
- Use BEM-like naming for classes (`.component__element--modifier`)
- Organize styles logically: base → components → utilities
- Use CSS variables for colors and repeated values
- Implement responsive design with mobile-first approach
- Use modern CSS features where appropriate (Grid, Flexbox, custom properties)

### JavaScript Standards
- Use ES6+ features (arrow functions, destructuring, async/await)
- Implement Web Components with Shadow DOM
- Use proper error handling with try/catch
- Organize code with clear separation of concerns
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Web Components Guidelines
- Use Shadow DOM for encapsulation
- Implement custom element lifecycle methods properly
- Use `setAttribute()` and `getAttribute()` for public properties
- Handle events with proper event listeners
- Create reusable, self-contained components

### Naming Conventions
- **Files:** kebab-case (`lotto-numbers.js`)
- **Classes:** PascalCase (`LottoNumbers`)
- **Functions/Variables:** camelCase (`generateNumbers`)
- **CSS Classes:** kebab-case with BEM prefixes (`lotto-container__ball`)
- **HTML Elements:** lowercase semantic tags

### Error Handling
- Always wrap potentially failing code in try/catch
- Provide meaningful error messages in console
- Implement graceful degradation for unsupported features
- Validate user inputs when applicable
- Use browser console for debugging and error reporting

### Performance Guidelines
- Minimize DOM manipulation
- Use event delegation where appropriate
- Implement lazy loading for large datasets
- Optimize images and assets
- Use requestAnimationFrame for animations

### Accessibility Standards
- Include proper ARIA labels and roles
- Ensure keyboard navigation support
- Provide sufficient color contrast
- Use semantic HTML for screen readers
- Test with accessibility tools

### Security Best Practices
- Never expose sensitive data in client-side code
- Validate all user inputs
- Use HTTPS for production deployments
- Sanitize any dynamic content injection
- Implement CSP headers if needed

## Development Workflow

### Before Making Changes
1. Read `blueprint.md` for current project context
2. Understand existing Web Components structure
3. Review current CSS organization
4. Test current functionality in browser

### During Development
1. Make incremental changes
2. Test in browser after each significant change
3. Check console for errors
4. Verify responsive design
5. Update `blueprint.md` with new features

### After Changes
1. Full functionality test
2. Cross-browser compatibility check
3. Mobile responsiveness verification
4. Console error review
5. Update documentation if needed

## Browser Compatibility

- Target modern browsers (Chrome, Firefox, Safari, Edge)
- Use Web Components with polyfills if needed for older browsers
- Test on mobile devices
- Ensure progressive enhancement

## Firebase Integration

If Firebase features are added:
- Use CDN links with SRI hashes
- Initialize Firebase in main.js
- Follow Firebase security best practices
- Update `.idx/mcp.json` with Firebase MCP server configuration

## Visual Design Principles

- Create modern, visually appealing interfaces
- Use consistent color schemes and typography
- Implement smooth transitions and micro-interactions
- Ensure proper visual hierarchy
- Use shadows and depth for visual interest

## Code Review Checklist

- [ ] HTML validates without errors
- [ ] CSS follows naming conventions
- [ ] JavaScript uses modern syntax
- [ ] Web Components properly encapsulated
- [ ] No console errors
- [ ] Responsive design works
- [ ] Accessibility features implemented
- [ ] Performance optimized
- [ ] Documentation updated