const disciplines = [
    {
        name: 'MMA', 
        href: '/mma', 
        imageUrl: '#', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti. Velit ut tortor pretium viverra. Ultricies mi quis hendrerit dolor magna eget est. Proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Justo donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae auctor eu augue ut. Tortor condimentum lacinia quis vel eros donec. Ut sem nulla pharetra diam sit amet nisl. Morbi tristique senectus et netus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut lectus arcu bibendum at varius. Hendrerit dolor magna eget est lorem. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nibh tellus molestie nunc non blandit massa.', 
    },
    {
        name: 'Muay Thai', 
        href: '/muaythai', 
        imageUrl: '#', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti. Velit ut tortor pretium viverra. Ultricies mi quis hendrerit dolor magna eget est. Proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Justo donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae auctor eu augue ut. Tortor condimentum lacinia quis vel eros donec. Ut sem nulla pharetra diam sit amet nisl. Morbi tristique senectus et netus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut lectus arcu bibendum at varius. Hendrerit dolor magna eget est lorem. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nibh tellus molestie nunc non blandit massa.', 
    },
    {
        name: 'Kickboxing', 
        href: '#kickboxing', 
        imageUrl: '#', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti. Velit ut tortor pretium viverra. Ultricies mi quis hendrerit dolor magna eget est. Proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Justo donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae auctor eu augue ut. Tortor condimentum lacinia quis vel eros donec. Ut sem nulla pharetra diam sit amet nisl. Morbi tristique senectus et netus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut lectus arcu bibendum at varius. Hendrerit dolor magna eget est lorem. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nibh tellus molestie nunc non blandit massa.', 
    },
    {
        name: 'Grappling', 
        href: '/grappling', 
        imageUrl: '#', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti. Velit ut tortor pretium viverra. Ultricies mi quis hendrerit dolor magna eget est. Proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Justo donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae auctor eu augue ut. Tortor condimentum lacinia quis vel eros donec. Ut sem nulla pharetra diam sit amet nisl. Morbi tristique senectus et netus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut lectus arcu bibendum at varius. Hendrerit dolor magna eget est lorem. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nibh tellus molestie nunc non blandit massa.', 
    },
    {
        name: 'Pencak Silat', 
        href: '/pencaksilat', 
        imageUrl: '#', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti. Velit ut tortor pretium viverra. Ultricies mi quis hendrerit dolor magna eget est. Proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Justo donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae auctor eu augue ut. Tortor condimentum lacinia quis vel eros donec. Ut sem nulla pharetra diam sit amet nisl. Morbi tristique senectus et netus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut lectus arcu bibendum at varius. Hendrerit dolor magna eget est lorem. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nibh tellus molestie nunc non blandit massa.', 
    },
    {
        name: 'Jeet Kune Do', 
        href: '/jkd', 
        imageUrl: '#', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce id velit ut tortor pretium viverra suspendisse potenti. Velit ut tortor pretium viverra. Ultricies mi quis hendrerit dolor magna eget est. Proin fermentum leo vel orci porta non pulvinar. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Justo donec enim diam vulputate ut pharetra. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Vitae auctor eu augue ut. Tortor condimentum lacinia quis vel eros donec. Ut sem nulla pharetra diam sit amet nisl. Morbi tristique senectus et netus. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Eu augue ut lectus arcu bibendum at varius. Hendrerit dolor magna eget est lorem. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Nibh tellus molestie nunc non blandit massa.', 
    },
];

export default disciplines;

