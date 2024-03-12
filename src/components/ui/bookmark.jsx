import * as React from "react"
import { cn } from "@/lib/utils"

const Bookmark = React.forwardRef(({ className, variant, size, imageSrc, alt, ...props }, ref) => {
	return (
	  <button
		className={cn(
		  // Combine the provided className with additional classes if needed
		  className,
		  // Add any classes you need for styling the button
		  // You can use the `variant` and `size` props to determine the styling
		  // For simplicity, I'm using a single class `btn` here
		  "btn"
		)}
		ref={ref}
		{...props}
	  >
		<img src={imageSrc} alt={alt} />
	  </button>
	);
  });
  
  // Export your button component
  export default Bookmark;
