import React from 'react'
import { Loader2 } from 'lucide-react'

const SecondaryLoader = ({isLoading}) => {
    if (!isLoading) return null
    return (
        <div><Loader2 className="animate-spin w-5 h-5" /></div>
    )
}

export default SecondaryLoader