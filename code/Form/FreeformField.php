<?php

namespace SilverStripe\Freeform\Form;

use SilverStripe\Forms\FormField;

class FreeformField extends FormField {
    /**
     * Add extra options to data
     */
    public function getSchemaDataDefaults()
    {
        $defaults = parent::getSchemaDataDefaults();
        $defaults['initialFields'] = $this->Value();

        return $defaults;
    }
}
