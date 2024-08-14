document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login');
    const dashboardSection = document.getElementById('dashboard');
    const feedsContainer = document.getElementById('feeds');

    // Dummy functions to simulate connecting to social media
    function connectSocialMedia(platform) {
        // Simulate connecting to a platform and fetching data
        setTimeout(() => {
            loginSection.style.display = 'none';
            dashboardSection.style.display = 'block';
            feedsContainer.innerHTML = `<h3>${platform} Feed</h3><p>Here will be the ${platform} feed.</p>`;
        }, 1000);
    }

    document.getElementById('connectFacebook').addEventListener('click', () => connectSocialMedia('Facebook'));
    document.getElementById('connectTwitter').addEventListener('click', () => connectSocialMedia('Twitter'));
});
