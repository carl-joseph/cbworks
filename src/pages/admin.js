import { useLayoutEffect } from "react"

export default function AdminPage() {
    useLayoutEffect(() => (window.location.href = "/"), [])
    return null
}
