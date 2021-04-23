/// <reference types="react-scripts" />
interface IDream {
  id: string | number,
  title: string,
  description: string,
  date: string,
  type: string
}

// Initial dream state
type DreamState = {
  dreams: IDream[]
}

// Schema how actions should look
type DreamAction = {
  type: string,
  // dream: IDream,
  payload?: unknown
}

type DispatchDreamType = (action: DreamAction) => DreamAction
