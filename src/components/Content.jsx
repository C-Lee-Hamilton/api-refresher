import DOMPurify from "dompurify";
import "../styles/Content.css";
function Content({ data }) {
  return (
    <div className="content-body">
      <div className="content-inner">
        {data ? (
          <div>
            <h1 className="title">{data.recipes[0]["title"]} </h1>
            <p className="sub-title">
              time:
              {data.recipes[0]["readyInMinutes"]} minutes | servings:
              {data.recipes[0]["servings"]}
            </p>
            <div className="img-container">
              <img src={data.recipes[0]["image"]} />
            </div>
            <p
              className="summary-container"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.recipes[0]["summary"]),
              }}
            ></p>

            <h2>Ingredients</h2>
            <ul>
              {data.recipes[0]["extendedIngredients"].map(
                ({ original }, index) => (
                  <li key={index}>{original}</li>
                )
              )}
            </ul>
            <h2>Instructions</h2>
            <ul>
              {data.recipes[0]["analyzedInstructions"][0]["steps"].map(
                ({ step }, index) => (
                  <li key={index}>
                    {index + 1}. {step}
                  </li>
                )
              )}
            </ul>
            <p className="credits">credits:{data.recipes[0]["creditsText"]}</p>
          </div>
        ) : (
          <div>nuffin</div>
        )}
      </div>
    </div>
  );
}

export default Content;

// analyzedInstructions-steps-number & step, extendedIngredients-original
