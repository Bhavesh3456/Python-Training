import React from 'react'

function Loading() {
    return (
        <div>
            <div className="relative">
                <div className="absolutely">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Loading
