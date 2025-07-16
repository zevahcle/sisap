<h2> Invited speakers </h2>

<b> Gonzalo Navarro </b> (University of Chile) <br>

<b style="color:#AA00AA"> Analyzing Metric Space Indexes: What For? </b> <br> 
<a href="presentations/navarro.pdf" style="text-decoration: none">[presentation]</a><br>
<br>

It has been a long way since the beginnings of metric space searching, where people coming from algorithmics tried to apply their background to this new paradigm, obtaining variable, but especially difficult to explain, success or lack of it. Since then, some has been learned about the specifics of the problem, in particular regarding key aspects such as the intrinsic dimensionality, that were not well understood in the beginning. The inclusion of those aspects in the picture has led to the most important developments in the area.

Similarly, researchers have tried to apply asymptotic analysis concepts to understand and predict the performance of the data structures. Again, it was soon clear that this was insufficient, and that the characteristics of the metric space itself could not be neglected. Although some progress has been made on understanding concepts such as the curse of dimensionality, modern researchers seem to have given up in using asymptotic analysis. They rely on experiments, or at best in detailed cost models that are good predictors but do not explain why the data structures perform in the way they do.

In this talk I will argue that this is a big loss. Even if the predictive capability of asymptotic analysis is poor, it constitutes a great tool to understand the algorithmic concepts behind the different data structures, and gives powerful hints in the design of new ones. I will exemplify my view by recollecting what is known on asymptotic analysis of metric indexes, and will add some new results.

<br> <br> <br>

<b> Yuri Lifshits </b> (Yahoo! Research) <br>

<b style="color:#AA00AA"> Combinatorial framework for similarity search </b> <br> 
<a href="presentations/lifshits.pdf" style="text-decoration: none">
[presentation]</a><br>
<br>

We present an overview of combinatorial framework for similarity search. An algorithm is combinatorial if only direct comparisons between two pairwise similarity values are allowed. Namely, the input dataset is represented by a comparison oracle that given any three points X,Y,Z answers whether Y or Z is closer to X. We assume that the similarity order of the dataset satisfies the four variations of the following disorder inequality: if X is the A'th most similar object to Y and Y is the B'th most similar object to Z, then X is among the D(A+B) most similar objects to Z, where D is a relatively small disorder constant. Combinatorial algorithms for nearest neighbor search have two important advantages: (1) they do not map similarity values to artificial distance values and do not use triangle inequality for the latter, and (2) they work for arbitrarily complicated data representations and similarity functions.
Ranwalk, the first known combinatorial solution for nearest neighbors, is randomized, exact, zero-error algorithm with query time that is logarithmic in number of objects. But Ranwalk preprocessing time is quadratic. Later on, another solution, called combinatorial nets, was discovered. It is deterministic and exact algorithm with almost linear time and space complexity of preprocessing, and near-logarithmic time complexity of search. Combinatorial nets also have a number of side applications. For near-duplicate detection they lead to the first known deterministic algorithm that requires just near-linear time + time proportional to the size of output. For any dataset with small disorder combinatorial nets can be used to construct a visibility graph: the one in which greedy routing deterministically converges to the nearest neighbor of a target in logarithmic number of steps. The later result is the first known work-around for Navarro's impossibility of generalizing Delaunay graphs.