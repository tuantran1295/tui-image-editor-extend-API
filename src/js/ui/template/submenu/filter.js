export default () => (`
    <ul class="tui-image-editor-submenu-item">
        <li class="tui-image-editor-submenu-align">
            <div class="tui-image-editor-checkbox-wrap fixed-width">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-grayscale">
                    <label for="tie-grayscale">Đen trắng</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-invert">
                    <label for="tie-invert">Đảo ngược màu</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-sepia">
                    <label for="tie-sepia">Sepia</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-sepia2">
                    <label for="tie-sepia2">Sepia2</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-blur">
                    <label for="tie-blur">Làm mờ</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-sharpen">
                    <label for="tie-sharpen">Làm sắc nét</label>
                </div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-emboss">
                    <label for="tie-emboss">Làm nổi</label>
                </div>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li class="tui-image-editor-submenu-align">
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled" style="margin-bottom: 7px;">
                <div class="tui-image-editor-checkbox-wrap">
                    <div class="tui-image-editor-checkbox">
                        <input type="checkbox" id="tie-remove-white">
                        <label for="tie-remove-white">Giảm trắng</label>
                    </div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>Mức độ</label>
                    <div id="tie-removewhite-threshold-range"></div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>Khoảng cách</label>
                    <div id="tie-removewhite-distance-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-newline tui-image-editor-checkbox-wrap">
                    <div class="tui-image-editor-checkbox">
                        <input type="checkbox" id="tie-gradient-transparency">
                        <label for="tie-gradient-transparency">Thang độ xám</label>
                    </div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>Giá trị</label>
                    <div id="tie-gradient-transparency-range"></div>
                </div>
            </div>
        </li>
        <li class="tui-image-editor-partition only-left-right">
            <div></div>
        </li>
        <li class="tui-image-editor-submenu-align">
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-brightness">
                    <label for="tie-brightness">Độ sáng</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-brightness-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-noise">
                    <label for="tie-noise">Làm nhiễu</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-noise-range"></div>
                </div>
            </div>

            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-pixelate">
                    <label for="tie-pixelate">Làm mờ</label>
                </div>
                <div class="tui-image-editor-range-wrap short">
                    <div id="tie-pixelate-range"></div>
                </div>
            </div>
            <div class="tui-image-editor-checkbox-group tui-image-editor-disabled">
                <div class="tui-image-editor-newline tui-image-editor-checkbox-wrap">
                    <div class="tui-image-editor-checkbox">
                        <input type="checkbox" id="tie-color-filter">
                        <label for="tie-color-filter">Bộ lọc màu</label>
                    </div>
                </div>
                <div class="tui-image-editor-newline tui-image-editor-range-wrap short">
                    <label>Mức độ</label>
                    <div id="tie-colorfilter-threshole-range"></div>
                </div>
            </div>
        </li>
        <li class="tui-image-editor-partition">
            <div></div>
        </li>
        <li>
            <div class="filter-color-item">
                <div id="tie-filter-tint-color" title="Tint"></div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-tint">
                    <label for="tie-tint"></label>
                </div>
            </div>
            <div class="filter-color-item">
                <div id="tie-filter-multiply-color" title="Multiply"></div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-multiply">
                    <label for="tie-multiply"></label>
                </div>
            </div>
            <div class="filter-color-item">
                <div id="tie-filter-blend-color" title="Blend"></div>
                <div class="tui-image-editor-checkbox">
                    <input type="checkbox" id="tie-blend">
                    <label for="tie-blend"></label>
                </div>
            </div>
        </li>
    </ul>
`);
