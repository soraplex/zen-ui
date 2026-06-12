// App.jsx
import React from "react";
import { Button } from "./components/Button";

const DemoContainer = ({ title, children }) => (
  <div style={{ marginBottom: "16px" }}>
    <h3 style={{ marginBottom: "6px", fontFamily: "sans-serif", fontSize: "12px", color: "#9090c4" }}>{title}</h3>
    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>{children}</div>
  </div>
);

function App() {
  return (
    <div
      style={{
        padding: "16px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <h1 style={{ marginBottom: "16px", fontSize: "18px", textAlign: "center" }}>Component Library Demo</h1>
        {/* Zen & Chi default theme colors */}
        <DemoContainer title="ChiZen Theme Colors">
          {/* Zen Palette */}
          <Button color="stone.500">Stone</Button>
          <Button color="bamboo.500">Bamboo</Button>
          <Button color="sage.500">Sage</Button>
          <Button color="mist.500">Mist</Button>
          <Button color="aurora.500">Aurora</Button>
          <Button color="lotus.500">Lotus</Button>
          <Button color="sand.500">Sand</Button>
          {/* Chi Palette */}
          <Button color="life.500">Life</Button>
          <Button color="fire.500">Fire</Button>
          <Button color="sun.500">Sun</Button>
          <Button color="water.500">Water</Button>
          <Button color="earth.500">Earth</Button>
          <Button color="wind.500">Wind</Button>
          <Button color="thunder.500">Thunder</Button>
        </DemoContainer>

        {/* Solid Buttons */}
        <DemoContainer title="Solid (Default)">
          <Button color="blue.500">Blue</Button>
          <Button color="red.500">Red</Button>
          <Button color="green.500">Green</Button>
          <Button color="yellow.500">Yellow</Button>
          <Button color="orange.500">Orange</Button>
          <Button color="purple.500">Purple</Button>
          <Button color="pink.500">Pink</Button>
          <Button color="teal.500">Teal</Button>
          <Button color="indigo.500">Indigo</Button>
          <Button color="gray.500">Gray</Button>
          <Button color="sky.500">Sky Blue</Button>
          <Button color="violet.500">Violet</Button>
          <Button color="cyan.500">Cyan</Button>
          <Button color="slate.500">Slate</Button>
          <Button color="amber.500">Amber</Button>
          <Button color="emerald.500">Emerald</Button>
        </DemoContainer>

        {/* Sizes */}
        <DemoContainer title="Sizes">
          <Button color="blue.500" size="sm">
            Small
          </Button>
          <Button color="blue.500" size="md">
            Medium
          </Button>
          <Button color="blue.500" size="lg">
            Large
          </Button>
        </DemoContainer>

        {/* Outline */}
        <DemoContainer title="Outline">
          <Button color="blue.500" variant="outline">
            Blue
          </Button>
          <Button color="red.500" variant="outline">
            Red
          </Button>
          <Button color="green.500" variant="outline">
            Green
          </Button>
          <Button color="gray.500" variant="outline">
            Gray
          </Button>
        </DemoContainer>

        {/* Ghost */}
        <DemoContainer title="Ghost">
          <Button color="blue.500" variant="ghost">
            Blue
          </Button>
          <Button color="red.500" variant="ghost">
            Red
          </Button>
          <Button color="green.500" variant="ghost">
            Green
          </Button>
          <Button color="gray.500" variant="ghost">
            Gray
          </Button>
        </DemoContainer>

        {/* Blue Shades */}
        <DemoContainer title="Blue Shades (50 - 900)">
          <Button color="blue.50" style={{ color: "#c7b7b7" }}>
            50
          </Button>
          <Button color="blue.100">100</Button>
          <Button color="blue.200">200</Button>
          <Button color="blue.300">300</Button>
          <Button color="blue.400">400</Button>
          <Button color="blue.500">500</Button>
          <Button color="blue.600">600</Button>
          <Button color="blue.700">700</Button>
          <Button color="blue.800">800</Button>
          <Button color="blue.900">900</Button>
        </DemoContainer>

        {/* Disabled */}
        <DemoContainer title="Disabled">
          <Button color="blue.500" disabled>
            Disabled
          </Button>
          <Button color="red.500" disabled>
            Disabled
          </Button>
          <Button color="gray.500" disabled>
            Disabled
          </Button>
        </DemoContainer>

        {/* Mobile Responsive */}
        <DemoContainer title="Mobile Responsive">
          <Button color="blue.500" size={["sm", "md", "lg"]}>
            Responsive
          </Button>
          <Button color="green.500" fullWidth size={["sm", "md"]}>
            Full Mobile
          </Button>
          <Button color="red.500" size="lg">
            Static
          </Button>
        </DemoContainer>
      </div>
    </div>
  );
}

export default App;
