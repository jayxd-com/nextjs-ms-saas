'use client';
import React, { ReactNode } from 'react';
import { Button } from "@/components/ui/button";

type LogoutButtonProps = {
    children: ReactNode; // ReactNode allows any valid React children to be passed
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ children }) => {
    const handleLogout = async () => {
        // Implement your logout logic here
        alert('Logging out...'); // Example alert
    };

    return (
        <Button aria-label="Logout" onPress={handleLogout}>{children}</Button>
    );
};

export default LogoutButton;