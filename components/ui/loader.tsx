import React from "react";

interface LoaderProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
    size = "md",
    className = ""
}) => {
    const sizeClasses = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    };

    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className={`${sizeClasses[size]} relative`}>
                {/* Outer ring with gradient */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#162694] via-[#4551a9] to-[#8759ff] animate-spin">
                    <div className="absolute inset-0 rounded-full bg-white" style={{ margin: '2px' }}></div>
                </div>

                {/* Inner spinning gradient */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-[#8759ff] via-[#ae8dff] to-[#162694] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
                    <div className="absolute inset-0 rounded-full bg-white" style={{ margin: '2px' }}></div>
                </div>

                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1 h-1 bg-gradient-to-r from-[#162694] to-[#8759ff] rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

// Full page loader component
export const FullPageLoader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="text-center">
                <Loader size="xl" />
                <p className="mt-4 font-gantari text-[#162694] text-lg font-medium">
                    Loading InteliDoc AI...
                </p>
            </div>
        </div>
    );
};

// Section loader component
export const SectionLoader: React.FC<{ message?: string }> = ({
    message = "Loading..."
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <Loader size="lg" />
            <p className="mt-4 font-gantari text-[#162694] text-base font-medium">
                {message}
            </p>
        </div>
    );
};

// Button loader component
export const ButtonLoader: React.FC<{ size?: "sm" | "md" }> = ({
    size = "md"
}) => {
    return (
        <div className="flex items-center gap-2">
            <Loader size={size} />
            <span className="font-gantari text-sm">Loading...</span>
        </div>
    );
};

// Card loader component
export const CardLoader: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center py-8">
                <Loader size="md" />
            </div>
        </div>
    );
}; 