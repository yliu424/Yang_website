document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        const href = anchor.getAttribute("href");

        // 只对以 # 开头的链接（锚点跳转）启用平滑滚动
        if (href && href.startsWith("#")) {
            anchor.addEventListener("click", function (event) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    });
});
