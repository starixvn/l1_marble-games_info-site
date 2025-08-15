# Testing Guide

This project uses Jest and React Testing Library for comprehensive testing.

## Setup

The testing environment is already configured with:

- **Jest**: JavaScript testing framework
- **React Testing Library**: React component testing utilities
- **Jest DOM**: Custom DOM element matchers
- **User Event**: Advanced user interaction simulation

## Running Tests

### Basic Commands

```bash
# Run all tests
yarn test

# Run tests in watch mode (development)
yarn test:watch

# Run tests with coverage report
yarn test:coverage

# Run tests in CI mode
yarn test:ci
```

### Test File Naming

- Test files should be named `*.test.tsx` or `*.spec.tsx`
- Place test files in `__tests__` folders within component directories
- Example: `src/components/ui/button/__tests__/button.test.tsx`

## Test Structure

### Component Tests

```typescript
import React from 'react'
import { render, screen, fireEvent } from '@/utils/test-utils'
import { Button } from '../index'

describe('Button Component', () => {
  it('renders button with children', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Utility Function Tests

```typescript
describe('Utility Functions', () => {
  describe('validateEmail', () => {
    it('validates correct email format', () => {
      const validEmails = ['test@example.com', 'user@domain.co.uk']
      
      validEmails.forEach(email => {
        expect(validateEmail(email)).toBe(true)
      })
    })
  })
})
```

## Testing Utilities

### Custom Render Function

Use the custom render function from `@/utils/test-utils`:

```typescript
import { render, screen } from '@/utils/test-utils'

// This automatically includes all providers and setup
render(<YourComponent />)
```

### Common Testing Patterns

#### Finding Elements

```typescript
// By role (recommended)
screen.getByRole('button', { name: /submit/i })
screen.getByRole('textbox', { name: /email/i })

// By text
screen.getByText('Submit')
screen.getByText(/submit/i) // regex for case-insensitive

// By label
screen.getByLabelText('Email Address')

// By placeholder
screen.getByPlaceholderText('Enter your email')

// By test ID
screen.getByTestId('submit-button')
```

#### User Interactions

```typescript
import { fireEvent, userEvent } from '@/utils/test-utils'

// Click
fireEvent.click(button)

// Type text
fireEvent.change(input, { target: { value: 'new text' } })

// Submit form
fireEvent.submit(form)

// Advanced user interactions
await userEvent.type(input, 'new text')
await userEvent.click(button)
```

#### Assertions

```typescript
// Element presence
expect(element).toBeInTheDocument()
expect(element).not.toBeInTheDocument()

// Element attributes
expect(element).toHaveAttribute('type', 'submit')
expect(element).toHaveClass('btn-primary')

// Element state
expect(element).toBeDisabled()
expect(element).toBeRequired()

// Function calls
expect(mockFunction).toHaveBeenCalled()
expect(mockFunction).toHaveBeenCalledTimes(1)
expect(mockFunction).toHaveBeenCalledWith('expected-arg')
```

## Mocking

### Next.js Components

```typescript
// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => <img {...props} />
}))

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  }
}))
```

### External Dependencies

```typescript
// Mock external libraries
jest.mock('@/utils/api', () => ({
  fetchData: jest.fn(() => Promise.resolve({ data: 'mocked' }))
}))
```

## Test Data

Use the mock data from `@/utils/test-utils`:

```typescript
import { mockData } from '@/utils/test-utils'

render(
  <HeroSection
    title={mockData.hero.title}
    description={mockData.hero.description}
  />
)
```

## Coverage

The project is configured with coverage thresholds:

- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%
- **Statements**: 70%

### Coverage Commands

```bash
# Generate coverage report
yarn test:coverage

# View coverage in browser
open coverage/lcov-report/index.html
```

## Best Practices

### 1. Test Behavior, Not Implementation

```typescript
// ❌ Don't test implementation details
expect(component.state.isVisible).toBe(true)

// ✅ Test user-visible behavior
expect(screen.getByText('Hello')).toBeInTheDocument()
```

### 2. Use Semantic Queries

```typescript
// ❌ Fragile selectors
screen.getByTestId('submit-button')

// ✅ Semantic queries
screen.getByRole('button', { name: /submit/i })
```

### 3. Test User Interactions

```typescript
// Test what users actually do
const user = userEvent.setup()
await user.click(button)
await user.type(input, 'text')
```

### 4. Keep Tests Focused

```typescript
// Each test should verify one thing
it('renders with title', () => {
  render(<Component title="Test" />)
  expect(screen.getByText('Test')).toBeInTheDocument()
})

it('calls onSubmit when form is submitted', () => {
  const onSubmit = jest.fn()
  render(<Component onSubmit={onSubmit} />)
  // ... test submission
})
```

### 5. Use Descriptive Test Names

```typescript
// ❌ Vague
it('works correctly', () => {})

// ✅ Descriptive
it('displays error message when email is invalid', () => {})
```

## Troubleshooting

### Common Issues

1. **Module not found**: Check `moduleNameMapping` in Jest config
2. **CSS modules**: Ensure `transformIgnorePatterns` excludes CSS files
3. **TypeScript errors**: Verify `tsconfig.json` includes test files

### Debug Mode

```bash
# Run tests with verbose output
yarn test --verbose

# Run specific test file
yarn test button.test.tsx

# Run tests matching pattern
yarn test --testNamePattern="renders"
```

## Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Best Practices](https://testing-library.com/docs/guiding-principles)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
