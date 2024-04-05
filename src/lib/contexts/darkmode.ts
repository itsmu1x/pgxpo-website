import { writable } from "svelte/store"

export const darkIcon = "material-symbols-light:clear-night"
export const lightIcon = "tabler:bulb-filled"

export default writable<boolean>()