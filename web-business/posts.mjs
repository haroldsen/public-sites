
export const posts = [
    {
        id: 1,
        date: '2026.01.28',
        title: 'A Model for All',
        content: `
            We've been discussing business models and it has been fascinating to
            realize just how many unique ways there are to make money via an online business.
            <br><br>
            In the early days of class, we read the following article:
            <br><a href="https://kentlundin.com/9-proven-business-models-to-launch-a-successful-online-business/">9-proven-business-models-to-launch-a-successful-online-business</a>
            <br><br>
            As we've discussed various models, I've learned that one must define their goals and limits to determine the perfect business model for them.
            <br><br>
            Here are a few of the various models, a brief description of how they work, and my personal opinion of them:
            <br><br>
            <strong>E-commerce</strong>
            <br><br>
            This is the traditional shopping experience.
            Customers visit your site, they buy the product from you, you ship it to them.
            <br><br>
            This is a great model for people who want the full, hands-on experience!
            This is not the ideal model for me because I don't want to worry about inventory and shipping.
            <br><br>
            <strong>Affiliate Marketing</strong>
            <br><br>
            I like to think of this as the "influencer" model.
            The goal is to pursuade customers to purchase products from other businesses (using your special link).
            When the people you influence shop at the stores you promote, those stores see (via the special link) that you brought them a customer.
            Some stores pay people for bringing them customers through this process.
            <br><br>
            I'm particularly fond of this model because it's lower risk and I don't want to mess with inventory!
            <br><br>
            On the flip side, this model relies heavily on traffic to generate real income.
            <br><br>
            <strong>Drop Shipping</strong>
            <br><br>
            Drop Shipping is a unique model that could easily be mistaken as E-commerce from the customer's perspective.
            Customers buy the product from you and are sent the product.
            When the customer buys the product from you, you buy the product from someone else and have THEM send the product to your customer.
            <br><br>
            Like affiliate marketing, Drop Shipping is low-risk but relies less on high traffic to make money!
            <br><br>
            Personally, I wouldn't want to do drop shipping because the true seller of the product is not clear to the customer.
            I don't like the idea of having a customer angry at me for selling them a product I never really sold them.
        `
    },
];

export function getPostById(id) {
    for (let i = 0; i < posts.length; i ++) {
        if (posts[i].id == id) {
            return posts[i];
        }
    }
}

