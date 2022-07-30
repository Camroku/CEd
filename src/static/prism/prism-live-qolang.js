Prism.Live.registerLanguage("qo", {
    comments: {
        singleline: "#",
        multiline: ["/*", "*/"]
    },
    snippets: {
        if: `if ($1) {
	$2
};`,
        function: `func $1($2) {
    $3
};`,
    }
});
