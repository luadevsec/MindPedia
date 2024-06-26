# MindPedia


padrão de classes css

.[page]-[nomedoitem]-[partedoitem]-[modelo]


exemplo:

```jsx
<div className="menu-calendar-container-defou">
            <div className="menu-calendar-header-defou">
                <button onClick={handlePrevMonth}>&lt;</button>
                <h2>Mês {currentMonth}</h2>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
```

```css
.menu-calendar-container-defou {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f9fa;

  }
  
  .menu-calendar-header-defou {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
```