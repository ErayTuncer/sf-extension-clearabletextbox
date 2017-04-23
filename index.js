const extend        = require("js-base/core/extend");
const FlexLayout    = require('sf-core/ui/flexlayout');
const TextBox       = require('sf-core/ui/textbox');
const Label         = require('sf-core/ui/label');
const TextAlignment = require('sf-core/ui/textalignment');
const Font          = require('sf-core/ui/font');
const Color         = require("sf-core/ui/color");

const ClearableTextbox = extend(FlexLayout)(
    function(_super, params) {
        var self = this;
        _super(self, params);
        
        self.flexDirection = FlexLayout.FlexDirection.ROW_REVERSE;
        self.alignItems = FlexLayout.AlignItems.CENTER;
        self.backgroundColor= Color.WHITE;
        
        var actualTextbox = new TextBox({
            left: 5, right: 5, top: 0, bottom:0,
            backgroundColor: Color.TRANSPARENT,
            positionType: FlexLayout.PositionType.ABSOLUTE,
            onTextChanged: function() {
                clearIcon.visible = actualTextbox.text.length > 0;
            }
        });
        self.addChild(actualTextbox);
        
        var clearIcon = new Label({
            visible: false,
            marginRight: 10,
            width: 25, height: 25,
            textAlignment: TextAlignment.MIDCENTER,
            font: Font.create("FontAwesome", 16),
            text: JSON.parse('"\uf00d"'),
            textColor: Color.create("#cccccc"),
            backgroundColor: Color.TRANSPARENT,
            onTouch: function() {
                actualTextbox.text = "";
            }
        });
        self.addChild(clearIcon);
});

module.exports = ClearableTextbox;