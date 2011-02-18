    schema = {
        title: "Aphasia Application",
        description: "Editing the Pictures and Words on the interface.",
        type: "object",
        properties: {
            topTabs: {
                type: "array",
                minItems: 1,
                maxItems: 3,
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            title: "Tab Name",
                            description: "URL Name of the tab (first character must be #)"
                        },
                        nameTag: {
                            type: "string",
                            title: "Appeared Tab Name",
                            description: "The name of the tab actually appearing on the page"
                        },
                        image: {
                            type: "string",
                            title: "Tab Image Name",
                            description: "The image that describes the tab name"
                        },
                        audioImages: {
                            type: "array",
                            minItems: 0,
                            maxItems: 9,
                            items: {
                                type: "object",
                                properties: {
                                    pic: {
                                        type: "string",
                                        title: "Picture name",
                                        description: "File name of the picture with extension"
                                    },
                                    word: {
                                        type: "string",
                                        title: "Word",
                                        description: "Short description of the picture"                                        
                                    },
                                    nameTag: {
                                        type: "string",
                                        title: "Unique name for Tab",
                                        description: "URL Name for the tab that contains the picture (must be unique from all other nameTag within audioImages"
                                    },
                                    phrase: {
                                        type: "string",
                                        title: "Phrase",
                                        description: "Long descriptive name of the picture"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            bottomTabs: {
                type: "array",
                minItems: 1,
                maxItems: 3,
                items: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            title: "Tab Name",
                            description: "URL Name of the tab (first character must be #)"
                        },
                        nameTag: {
                            type: "string",
                            title: "Appeared Tab Name",
                            description: "The name of the tab actually appearing on the page"
                        },
                        image: {
                            type: "string",
                            title: "Tab Image Name",
                            description: "The image that describes the tab name"
                        },
                        audioImages: {
                            type: "array",
                            minItems: 0,
                            maxItems: 9,
                            items: {
                                type: "object",
                                properties: {
                                    pic: {
                                        type: "string",
                                        title: "Picture name",
                                        description: "File name of the picture with extension"
                                    },
                                    word: {
                                        type: "string",
                                        title: "Word",
                                        description: "Short description of the picture"                                        
                                    },
                                    nameTag: {
                                        type: "string",
                                        title: "Unique name for Tab",
                                        description: "URL Name for the tab that contains the picture (must be unique from all other nameTag within audioImages"
                                    },
                                    phrase: {
                                        type: "string",
                                        title: "Phrase",
                                        description: "Long descriptive name of the picture"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }  
    }
    
    thisSchema = {};
    
    
    function start() {
        var mainArea = dojo.byId("mainArea");
        var ulList = ["Step 1 -- Getting Started", "Step 2 -- Customize Your Tabs", "Step 3 -- Select Contents for Your Tabs", "Step 4 -- Summary", "Step 5 -- You're Done!"];
        var tabs = dojo.create("table",null,mainArea);
        dojo.forEach(ulList, function(item) {
            var td = dojo.create("td",{id:item, innerHTML:item, style:{"font-size":"25%"}},tabs);
        });
        var forwardButton = [];
        var backwardButton = [];
        var ids = ["0","1","2","3","4"];
        for (var i=0; i<5; i++) {
            var div = dojo.create("div",{id:ids[i],className:"mainContent", style:{"display":"none"}, innerHTML:i},mainArea);
            backwardButton[i] = dojo.create("button",{innerHTML:"Back"},div);
            forwardButton[i] = dojo.create("button",{innerHTML:"Next"},div);
        }
        i=0;
        jsProgress.update({maximum:4});
        dojo.forEach(forwardButton, function(button) {
            dojo.connect(button,'onclick',function() {
                if (i!=4) {
                    
                    dojo.byId(ulList[i]).className = null;
                
                    button.parentNode.style.display="none";
                    forwardButton[++i].parentNode.style.display="block";
                    jsProgress.update({progress:i});
                    
                    dojo.byId(ulList[i]).className = "td1";
                }
            });
        });
        dojo.forEach(backwardButton, function(button) {
            dojo.connect(button,'onclick',function() {
                if (i!=0) {
                    
                    dojo.byId(ulList[i]).className = null;
                
                    button.parentNode.style.display="none";
                    forwardButton[--i].parentNode.style.display="block";
                    jsProgress.update({progress:i});
                    
                    dojo.byId(ulList[i]).className = "td1";
                }
            });
        });
        forwardButton[0].parentNode.style.display = "block";
        dojo.byId(ulList[0]).className = "td1";
    }

    function step1 () {
        
    }
    
    dojo.ready(start);
    