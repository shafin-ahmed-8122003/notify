"use client";

import { useUser } from "@clerk/clerk-react";

const UserName = () => {
    const { user } = useUser();

    return <span>{user?.firstName}</span>;
};

export default UserName;
