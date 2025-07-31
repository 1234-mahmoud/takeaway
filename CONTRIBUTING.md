# Contributing to Takeaway

Thank you for your interest in contributing to Takeaway! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

- Use the GitHub issue tracker
- Provide detailed steps to reproduce the bug
- Include browser/device information
- Add screenshots if applicable

### Suggesting Features

- Check existing issues first
- Provide clear description of the feature
- Explain the benefit to users
- Include mockups if possible

### Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

```bash
# Clone your fork
git clone https://github.com/yourusername/takeaway.git
cd takeaway

# Install dependencies
npm install

# Set up environment variables
cp env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
```

## 📝 Code Style Guidelines

### JavaScript/React

- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use CSS variables for theming
- Keep components responsive

### File Structure

- Place components in `/components`
- Use descriptive file names
- Group related components together
- Follow existing naming conventions

## 🌍 Internationalization

### Adding New Languages

1. Update `data/translations.js`
2. Add language selector option
3. Test RTL layout if needed
4. Update documentation

### Translation Guidelines

- Use clear, concise language
- Maintain consistent terminology
- Consider cultural context
- Test with native speakers

## 🧪 Testing

### Running Tests

```bash
npm run test
npm run test:watch
npm run test:coverage
```

### Writing Tests

- Test component functionality
- Test user interactions
- Test error handling
- Maintain good coverage

## 📦 Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔍 Code Review Process

1. **Pull Request Requirements**

   - Clear description of changes
   - Screenshots for UI changes
   - Tests for new functionality
   - Updated documentation

2. **Review Checklist**

   - Code follows style guidelines
   - No console errors or warnings
   - Responsive design maintained
   - Accessibility standards met
   - Performance impact considered

3. **Review Process**
   - At least one approval required
   - Address all review comments
   - Update PR as needed
   - Merge after approval

## 🐛 Bug Fixes

### Before Submitting

- Reproduce the issue locally
- Check existing issues for duplicates
- Test your fix thoroughly
- Update tests if needed

### Bug Report Template

```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**

1. Step one
2. Step two
3. Step three

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**

- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop]

**Additional Context**
Screenshots, logs, etc.
```

## Feature Requests

### Before Submitting

- Check existing issues
- Research similar features
- Consider implementation complexity
- Think about user impact

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this work?

**Alternative Solutions**
Other approaches considered

**Additional Context**
Mockups, examples, etc.
```

## 📚 Documentation

### Updating Documentation

- Keep README.md current
- Update API documentation
- Add inline code comments
- Update contributing guidelines

### Documentation Standards

- Use clear, concise language
- Include code examples
- Add screenshots when helpful
- Keep structure consistent

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] All tests pass
- [ ] No console errors
- [ ] Performance optimized
- [ ] SEO metadata updated
- [ ] Environment variables set
- [ ] Documentation updated

### Deployment Process

1. Create release branch
2. Update version numbers
3. Run full test suite
4. Build for production
5. Deploy to staging
6. Test thoroughly
7. Deploy to production

## 🎯 Contribution Areas

### High Priority

- Bug fixes
- Performance improvements
- Accessibility enhancements
- Security updates

### Medium Priority

- New features
- UI/UX improvements
- Documentation updates
- Test coverage

### Low Priority

- Code refactoring
- Style improvements
- Minor optimizations

## 📞 Getting Help

- **Issues:** Use GitHub issues
- **Discussions:** Use GitHub discussions
- **Email:** support@takeaway.com
- **Documentation:** Check README.md

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation
- GitHub contributors page

## 📄 License

By contributing to Takeaway, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Takeaway! 🍔
