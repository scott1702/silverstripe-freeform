<?php

use SilverStripe\ORM\DataExtension;
use SilverStripe\Forms\LiteralField;
use SilverStripe\Forms\FieldList;
use SilverStripe\View\Requirements;

class FreeformExtension extends DataExtension
{
    public function updateCMSFields(FieldList $fields)
    {
        Requirements::javascript('silverstripe/freeform:client/dist/app.js');

        $field = LiteralField::create('Test', '<div class="freeform"></div>');

        $fields->addFieldToTab('Root.Freeform', $field);

        return $fields;
    }
}
