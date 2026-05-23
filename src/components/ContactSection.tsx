import React, { useState } from "react";
import { Button } from "./Button";
import { ContactModal } from "./ContactModal";

export const ContactSection: React.FC = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <div className="bg-black text-white py-16 px-4 md:px-8 mt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to start your project?</h2>
                    <div className="flex justify-center">
                        <Button
                            type="secondary"
                            label="Contact Me"
                            className="!bg-white !border-white !text-black hover:!bg-gray-100 shadow-lg"
                            showIcon={true}
                            onClick={() => setIsContactModalOpen(true)}
                        />
                    </div>
                </div>
            </div>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
};
