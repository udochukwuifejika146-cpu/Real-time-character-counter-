const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const updateCounter = () => {
  let text = textInput.value;

    // Enforce a hard cap of 50 characters by slicing excess text (critical for pasting text)
      if (text.length > 50) {
          text = text.slice(0, 50);
              textInput.value = text;
                }

                  const textLength = text.length;
                    
                      // Update the exact string format expected by freeCodeCamp
                        charCount.textContent = `Character Count: ${textLength}/50`;

                          // Apply red text styling only when the exact character limit is reached
                            if (textLength === 50) {
                                charCount.classList.add("red");
                                  } else {
                                      charCount.classList.remove("red");
                                        }
                                        };

                                        // Listen to "input" events to capture all keyboard typing, deletions, and mouse pastes
                                        textInput.addEventListener("input", updateCounter);
