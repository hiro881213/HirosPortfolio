export const getUrl = () => {

    const uri = new URL(window.location.href);

    if (uri.hostname.indexOf("localhost") > -1) {

        return '';

    } else {

        return "/portfolio";

    }

}