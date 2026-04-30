# Small To-do App

## Installation

- `npm i` to get dependencies
- add .env containing a supabase table with schema:
  - id `int8 primary`
  - todo `text`
  - severity `text`
  - created_at `timestamptz`

## Usage

`npm run dev` to run the app

Add a to-do with the form at the top, and it will render along the page as you add more.
Click Remove to get rid of any completed todos.
