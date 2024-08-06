import React from "react";

const SectionForm = ({ section_name, children }) => {
    return (
        <>
            <h2>{section_name}</h2>
            <section>
                {children}
            </section>
        </>
    );
}

export default SectionForm;
