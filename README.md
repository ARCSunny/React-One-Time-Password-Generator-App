# OTP Generator

A lightweight, accessible React component that generates secure-style 6-digit One-Time Passwords (OTPs) with a real-time 5-second expiration countdown.

---

## Features

- **6-Digit Code Generation:** Randomly generates a 6-digit numeric OTP ranging from `100000` to `999999`.
- **Countdown Timer:** Automatically initiates a 5-second expiration timer upon code generation.
- **Spam Prevention:** Disables the **Generate OTP** button while a code is currently active to prevent accidental overwrites or rapid regeneration.
- **Dynamic Status Messaging:** Clearly communicates initial state, active countdown (`Expires in: X seconds`), and expiration notices.
- **Accessibility First:** Uses `aria-live="polite"` on the timer display so screen readers announce countdown updates and expiration states smoothly.

---

## Component Architecture

The `OTPGenerator` component is built using functional React and relies on standard React Hooks:

### State Management
| State Variable | Type | Initial Value | Purpose |
| :--- | :--- | :--- | :--- |
| `otp` | `string` | `""` | Stores the currently generated 6-digit OTP string. |
| `timeLeft` | `number` | `0` | Tracks the remaining validity time in seconds. |
| `hasGenerated` | `boolean` | `false` | Distinguishes between the initial idle state and an expired OTP state. |

### Lifecycle & Effects
- **`useEffect` Timer:** Watches `timeLeft`. When `timeLeft > 0`, it sets a `1000ms` interval to decrement the counter. Includes a cleanup function (`clearInterval`) to prevent memory leaks on unmount or re-renders.

---

## DOM Structure & Selectors

For styling or end-to-end testing (e.g., Jest, React Testing Library, Cypress), the component exposes the following semantic IDs and classes:

- `.container` — Main wrapper element.
- `#otp-title` — Component heading (`<h1>`).
- `#otp-display` — Displays the generated OTP or placeholder prompt (`<h2>`).
- `#otp-timer` — Live region displaying countdown or expiration status (`<p>`).
- `#generate-otp-button` — Action trigger button (`<button>`).