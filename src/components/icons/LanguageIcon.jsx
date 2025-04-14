import React from 'react';

const LanguageIcon = ({ width = "24", height = "24", onClick }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="white"
                strokeWidth="1.5"
            />
            <path
                d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z"
                stroke="white"
                strokeWidth="1.5"
            />
            <path
                d="M2.5 9H21.5"
                stroke="white"
                strokeWidth="1.5"
            />
            <path
                d="M2.5 15H21.5"
                stroke="white"
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default LanguageIcon;