2022-04-29
So, I need to attach something new to the DOM now that the API is returning the "Merge Into" thing so I can mock it and test how it's drawing, specially for edge cases.
Let's take a look into how to do it...
It's not that hard, just push stuff into a state that is like an array of components, I'm glad I'm not using Typescript using types with react would look weird for sure.
Anyways, problem solved for now, next step is parsing the MergeInto thing into something on the screen. If I want to display a tree I'm going to need and enterily new component
that relies on NumberSequence to display nodes based on the MergeInto object? It's possible I think it's not optimal object for that, I could just return a tree from the API.
One thing I could do is returning the sorted sequence in all kinds of different formats and see what I can do with them. For now I'm going along with the MergeInto thing.

It's reasonably easy to encode a binary tree into an array and traverse...at least if I didn't tried to remember it by myself, at some point I did but went to check if
I was right which took around an entire afternoon because I insisted on not calculating the height of the tree, at some point I decided to go for it. It's not that hard but I was afraid of Log.

2022-05-02
Started the day looking through the code, it's really confusing, might focus on a single thing for now, when it works I can implement more ways of returning the sorted data.
Back to the tree problem, I think it did it and it was a problem I had never really solved before. A precise description of what this problem consists as an algorithms problem
is the following: take the resulting tree of mergesorting an array and store it into an array.

Back to react components, at first it looks easy but I'm not that good with react or with front-end. For now I'll be exploring possible solutions while I try to grasp what code
belongs to the tree component and when I get something that looks nice look into it to know why it works well and how it could be improved(and if it's worth improving).
As I expected, just spent a few too many hours becuase I was not aware I needed to save the response to a state as soon as possible. It's not intuitive how it works, always be ready for unexpected behaviour with no warning.

Finally got to write what I wanted, also came to the conclusion that I should not use NumberSequence inside NumberTree but rather create a now component. NumberSequence always creates a new row if you get 12 or more values, this is a core behaviour that is not desired on the component that writes the levels of NumberTree, but I think NumberBox will still be reused since it doesn't hold any logic.