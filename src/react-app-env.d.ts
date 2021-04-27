/// <reference types="react-scripts" />

import { JsonObjectExpression } from "typescript"

interface IDream {
  id: string | number,
  title: string,
  description: string,
  date: string,
  type: string
}

// Initial dream state
type DreamState = {
  dreams: any
}

// Schema how actions should look
type DreamAction = {
  type: string,
  payload?: any
}

type DispatchDreamType = (action: DreamAction) => DreamAction
