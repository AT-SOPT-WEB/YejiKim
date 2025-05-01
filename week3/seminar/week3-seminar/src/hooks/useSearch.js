import { useState } from "react";

export function useSearch(members) {
    const [search, setSearch] = useState("");
    const [filteredMembers, setFilteredMembers] = useState(members);

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const searchButtonHandler = () => {
        const result = members.filter((member) => {
            return member.name.includes(search);
        });

        setFilteredMembers(result);
    };

    return { search, searchHandler, filteredMembers, searchButtonHandler };
}