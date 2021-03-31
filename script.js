let aboutCertificate = document.querySelector('.about-certificate');
let getCertificate = document.querySelector('.get-certificate');
let aboutCertificateSpan = document.querySelector('.about-certificate-span');
let getCertificateSpan = document.querySelector('.get-certificate-span');

aboutCertificate.onclick = function () {
        let aboutCertificateHidden = document.querySelector('.about-certificate-hidden');
        if (aboutCertificateHidden.style.display === 'none') {
            aboutCertificateHidden.style.display = 'block';
            aboutCertificateSpan.classList.add('info-certificate-span-rotate');
        } else {
            aboutCertificateHidden.style.display = 'none'
            aboutCertificateSpan.classList.remove('info-certificate-span-rotate');
        }
    }
    getCertificate.onclick = function () {
        let getCertificateHidden = document.querySelector('.get-certificate-hidden');
        if (getCertificateHidden.style.display === 'none') {
            getCertificateHidden.style.display = 'block';
            getCertificateSpan.classList.add('info-certificate-span-rotate');
        } else {
            getCertificateHidden.style.display = 'none';
            getCertificateSpan.classList.remove('info-certificate-span-rotate');
        }
    }



