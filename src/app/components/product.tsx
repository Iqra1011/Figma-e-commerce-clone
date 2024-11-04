export default function Product(){
    return(
              <div className="products">
        <div className="left">
          <div className="playStation">
            <div className="content">
              <h3>Playstation 5</h3>
              <p>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="airPods">
              <div>
                <h3>
                  Apple AirPods <span>Max</span>
                </h3>
                <p>Computational audio. Listen, it's powerful</p>
              </div>
            </div>
            <div className="visionPro">
              <div>
                <h3>
                  Apple Vision <span>Pro</span>
                </h3>
                <p>An immersive way to experience entertainment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="macbook">
            <h1>
              Macbook <span>Air</span>
            </h1>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    )
}