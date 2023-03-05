// import {describe, test} from 'vitest';

// describe("NewNavbar test", () => {
//     test("Should show Game-Space", () => {

//     })
// })

import react from '@vitejs/plugin-react-swc'
import { render } from '@testing-library/react'
import NewNavbar from '../src/components/NewNavBar'
const result = render(<NewNavbar />)
