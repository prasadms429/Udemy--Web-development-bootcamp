// In command line of website
// we can just add the elements in website anywhere using command line. But after refressing it will go off.
$("h1").before("<button>New</button>");   // The "before" method will add button before starting of "<h1>". As this, <button>New</button><h1>New</h1>

$("h1").after("<button>New</button>");    // The "after" method will add button after "</h1>". As this, <h1>New</h1><button>New</button>

$("h1").prepend("<button>New</button>");  // The "prepend" method will add button before "h1" content and after "<h1>". As this, <h1><button>New</button>New</h1>

$("h1").append("<button>New</button>");   // The "append" method will add button after "h1" content and before "</h1>". As this, <h1>New<button>New</button></h1>

// To remove all the buttons added to website
$("button").remove();
