import { ReactNode } from "react"

function EditorFnModal({ children }: {
    children: ReactNode
}) {
    return (
        <div >
            <span>editor modal</span>
            {children}
        </div>
    )
}

export default EditorFnModal