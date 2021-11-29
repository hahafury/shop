const isValidPhone = (phone) => {
    phone = phone.replace(/[\s\-]/g, '');
    return phone.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/);
};

export default isValidPhone;