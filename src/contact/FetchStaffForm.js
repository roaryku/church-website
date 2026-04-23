const addStaffForm = (firstName, lastName,  email, message ) => {
    // Mock async submit for portfolio/demo usage with no backend dependency.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    firstName,
                    lastName,
                    emailAddress: email,
                    message,
                },
            });
        }, 300);
    });
}

export {addStaffForm};